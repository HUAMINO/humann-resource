<template>
  <div class="dashboard-container">
    <div class="app-container">
      <PageTool>
        <span slot="before">共{{ page.total }}条数据</span>
        <template #after>
          <el-button type="danger" size="small" @click="onExport">Excel导出</el-button>
          <el-button type="success" size="small" @click="$router.push('/import')">Excel导入</el-button>
          <el-button type="primary" size="small" @click="showAddDialog= true">新增员工</el-button>
        </template>
      </PageTool>
      <el-card>
        <el-table :data="list" border stripe>
          <el-table-column label="序号" width="50" :sortable="true" prop="" type="index"></el-table-column>
          <el-table-column label="姓名" :sortable="true" prop="username"></el-table-column>
          <el-table-column label="头像" width="130" :sortable="true" prop="">
            <template v-slot="{row}">
              <!--              <img v-imgerror="require('@/assets/common/head.jpg')" :src="row.staffPhoto" style="width: 100px;height: 100px;border-radius:50%">-->
              <el-image :src="row.staffPhoto" @click="onShowQrCodeDialog(row.staffPhoto)">
                <img slot="error" src="@/assets/common/head.jpg" @click="onShowQrCodeDialog('@/assets/common/head.jpg')">
              </el-image>
            </template>
          </el-table-column>
          <el-table-column label="手机号" :sortable="true" prop="mobile"></el-table-column>
          <el-table-column label="工号" :sortable="true" prop="workNumber"></el-table-column>
          <el-table-column label="聘用形式" :sortable="true" prop="formOfEmployment">
            <template v-slot="{row}">
              {{ row.formOfEmployment | formatHireType }}
            </template>
          </el-table-column>
          <el-table-column label="部门" :sortable="true" prop="departmentName"></el-table-column>
          <el-table-column label="入职时间" :sortable="true" prop="timeOfEntry">
            <template v-slot="{row}">{{ row.timeOfEntry | formatdate }}</template>
          </el-table-column>
          <el-table-column label="状态" :sortable="true" prop="enableState">
            <template v-slot="{row}">
              <el-switch
                v-model="row.enableState"
                disabled
                :active-value="1"
                :inactive-value="0"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" :sortable="true" prop="" width="280">
            <template v-slot="{row}">
              <el-button type="text" @click="$router.push('/employees/detail/' + row.id)">查看</el-button>
              <el-button type="text">转正</el-button>
              <el-button type="text">调岗</el-button>
              <el-button type="text">离职</el-button>
              <el-button type="text" @click="onShowAsignRoleDialog(row.id)">角色</el-button>
              <el-button type="text" @click="onDel(row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" justify="end">
          <el-pagination
            layout="total, prev, pager, next"
            :total="page.total"
            :page-size="page.size"
            @current-change="onPageChange"
          >
          </el-pagination>
        </el-row>
      </el-card>
    </div>
    <el-dialog title="显示二维码" :visible.sync="showQrCodeDialog">
      <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
    </el-dialog>
    <el-dialog :visible="showAddDialog" v-bind="$attrs" title="新增员工" v-on="$listeners" @open="onOpen" @close="close">
      <el-form ref="formRef" :model="form" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="姓名" prop="username">
          <el-input v-model="form.username" placeholder="请输入姓名" clearable :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机" clearable :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="入职时间" prop="timeOfEntry">
          <el-date-picker
            v-model="form.timeOfEntry"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            :style="{width: '100%'}"
            placeholder="请选择入职时间"
            clearable
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="聘用形式" prop="formOfEmployment">
          <el-select v-model="form.formOfEmployment" placeholder="请选择聘用形式" clearable :style="{width: '100%'}">
            <el-option
              v-for="(item, index) in formOfEmploymentOptions"
              :key="index"
              :label="item.value"
              :value="item.id"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工号" prop="workNumber">
          <el-input v-model="form.workNumber" placeholder="请输入工号" clearable :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="部门" prop="departmentName">
          <el-input v-model="form.departmentName" placeholder="请输入部门" clearable :style="{width: '100%'}" @focus="getDeptsList">
          </el-input>
          <el-tree v-if="showTree" :data="depts" :props="{label: 'name'}" @node-click="handleNodeClick"></el-tree>
        </el-form-item>
        <el-form-item label="转正时间" prop="correctionTime">
          <el-date-picker
            v-model="form.correctionTime"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            :style="{width: '100%'}"
            placeholder="请选择转正时间"
            clearable
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <el-row slot="footer" type="flex" justify="center">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="handelConfirm">确定</el-button>
      </el-row>
    </el-dialog>
    <el-dialog
      title="分配角色"
      :visible.sync="showAsignRoleDialog"
      width="50%"
      @close="showAsignRoleDialog = false"
    >
      <el-checkbox-group v-model="roleIds">
        <el-checkbox v-for="(item, index) in roleList" :key="index" :label="item.id">{{ item.name }}</el-checkbox>
      </el-checkbox-group>
      <el-row slot="footer" type="flex" justify="center">
        <el-button @click="showAsignRoleDialog = false">取消</el-button>
        <el-button type="primary" @click="asignRole">确认</el-button>
      </el-row>
    </el-dialog>

  </div>
</template>

<script>
import { addEmployee, getEmployees, delEmployee, assignRoles } from '@/api/employees'
import QrcodeVue from 'qrcode.vue'
import employeesEnum from '@/api/constant/employees'
import { getList } from '@/api/department'
import { trnslateListToTree } from '@/utils'
import _ from 'lodash'
import { formatdate, formatHireType } from '@/filter'
import { getEmplyeeBaseInfo } from '@/api/user'
import { getRoleList } from '@/api/settings'

export default {
  name: 'Employees',
  components: {
    QrcodeVue
  },
  props: {
  },
  data() {
    return {
      showAddDialog: false,
      list: [],
      page: {
        page: 1,
        size: 10,
        total: 0
      },
      showQrCodeDialog: false,
      staffPhotoUrl: undefined,
      value: 'https://example.com',
      size: 300,
      form: {
        username: undefined,
        mobile: undefined,
        timeOfEntry: null,
        formOfEmployment: undefined,
        workNumber: undefined,
        departmentName: undefined,
        correctionTime: null
      },
      rules: {
        username: [{
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        }],
        mobile: [{
          required: true,
          message: '请输入手机',
          trigger: 'blur'
        }],
        timeOfEntry: [{
          required: true,
          message: '请选择入职时间',
          trigger: 'change'
        }],
        formOfEmployment: [{
          required: true,
          message: '请选择聘用形式',
          trigger: 'change'
        }],
        workNumber: [{
          required: true,
          message: '请输入工号',
          trigger: 'blur'
        }],
        departmentName: [{
          required: true,
          message: '请输入部门',
          trigger: 'change'
        }],
        correctionTime: []
      },
      formOfEmploymentOptions: employeesEnum.hireType,
      depts: [],
      showTree: false,
      showAsignRoleDialog: false,
      roleList: [],
      roleIds: [],
      userId: undefined
    }
  },
  created() {
    this.getList()
  },
  mounted() {},
  methods: {
    async getList() {
      const { total, rows } = await getEmployees(this.page)
      this.page.total = total
      this.list = rows
      this.showTree = false
    },
    onPageChange(value) {
      this.page.page = value
      this.getList()
    },
    onShowQrCodeDialog(url) {
      this.staffPhotoUrl = url
      this.showQrCodeDialog = true
    },
    onOpen() {},
    close() {
      this.$refs['formRef'].resetFields()
      this.showAddDialog = false
    },
    handelConfirm() {
      this.$refs['formRef'].validate(async valid => {
        if (!valid) return
        await addEmployee(this.form)
        this.$message.success('操作成功')
        this.getList()
        this.close()
      })
    },
    async getDeptsList() {
      this.depts = trnslateListToTree((await getList()).depts, '')
      // console.log(this.depts)
      this.showTree = true
    },
    handleNodeClick(data) {
      this.form.departmentName = data.name
      this.showTree = false
    },
    onDel(id) {
      this.$confirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async action => {
        await delEmployee(id)
        this.$message.success('操作成功')
        this.getList()
      })
    },
    onExport() {
      import('@/vendor/Export2Excel').then(async excel => {
        const headers = {
          '姓名': 'username',
          '手机号': 'mobile',
          '入职日期': 'timeOfEntry',
          '聘用形式': 'formOfEmployment',
          '转正日期': 'correctionTime',
          '工号': 'workNumber',
          '部门': 'departmentName'
        }
        const { rows } = await getEmployees({
          page: 1,
          size: this.page.total
        })
        const values = Object.values(headers)
        const data = rows.map(t => {
          const item = _.pick(t, values)
          item.timeOfEntry = formatdate(item.timeOfEntry)
          item.correctionTime = formatdate(item.correctionTime)
          item.formOfEmployment = formatHireType(item.formOfEmployment)
          return Object.values(item)
        })
        console.log(rows)
        excel.export_json_to_excel({
          header: Object.keys(headers), // 表头 必填
          data: data, // 具体数据 必填
          filename: 'excel-list', // 非必填
          autoWidth: true, // 非必填
          bookType: 'xlsx' // 非必填
        })
      })
    },
    async onShowAsignRoleDialog(id) {
      const { roleIds } = await getEmplyeeBaseInfo(id)
      this.roleIds = roleIds
      const { rows } = await getRoleList({ page: 1, pagesize: 50 })
      this.roleList = rows
      this.showAsignRoleDialog = true
      this.userId = id
    },
    async asignRole() {
      await assignRoles({
        id: this.userId,
        roleIds: this.roleIds
      })
      this.showAsignRoleDialog = false
      this.$message.success('操作成功')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
