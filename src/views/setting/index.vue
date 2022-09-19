<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-tabs>
        <!-- 放置页签 -->
        <el-tab-pane label="角色管理">
          <!-- 新增角色按钮 -->
          <el-row>
            <el-button
              icon="el-icon-plus"
              size="small"
              type="primary"
              @click="showDialog = true"
            >新增角色</el-button>
          </el-row>
          <!-- 表格 -->
          <el-table :data="list" border stripe style="width: 100%;margin-top: 20px">
            <el-table-column align="center" type="index" label="序号" />
            <el-table-column align="center" prop="name" label="角色名称" />
            <el-table-column align="center" prop="description" label="描述" />
            <el-table-column align="center" label="操作">
              <template v-slot="{row}">
                <el-button size="small" type="success">分配权限</el-button>
                <el-button size="small" type="primary" @click="onEdit(row.id)">编辑</el-button>
                <el-button size="small" type="danger" @click="onDel(row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页组件 -->
          <el-row type="flex" justify="end">
            <!-- 分页组件 -->
            <el-pagination
              layout="prev,pager,next"
              :page-size="page.pagesize"
              :total="page.total"
              @current-change="onPageChange"
            ></el-pagination>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="公司信息">
          <el-alert
            title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改"
            type="info"
            show-icon
            :closable="false"
          />
          <el-form label-width="120px" style="margin-top:50px">
            <el-form-item label="公司名称">
              <el-input v-model="info.name" disabled style="width:400px" />
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input v-model="info.companyAddress" disabled style="width:400px" />
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="info.mailbox" disabled style="width:400px" />
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="info.remarks" type="textarea" :rows="3" disabled style="width:400px" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog
      :visible="showDialog"
      v-bind="$attrs"
      :title="form.id? '编辑角色':'新增角色'"
      v-on="$listeners"
      @open="onOpen"
      @close="close"
    >
      <el-form ref="formRef" :model="form" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入角色名称" clearable :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="description">
          <el-input v-model="form.description" placeholder="请输入角色描述" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" type="flex" justify="center">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="handelConfirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addRole, delRole, getCompanyById, getRoleById, getRoleList } from '@/api/settings'
export default {
  name: 'Setting',
  components: {},
  props: {},
  data() {
    return {
      showDialog: false,
      list: [],
      info: {},
      page: {
        page: 1,
        pagesize: 10,
        total: 0
      },
      form: {
        name: undefined,
        description: undefined
      },
      rules: {
        name: [{
          required: true,
          message: '请输入角色名称',
          trigger: 'blur'
        }],
        description: []
      }
    }
  },
  async created() {
    this.info = await getCompanyById(this.$store.state.user.userInfo.companyId)
    this.getList()
  },
  mounted() {

  },
  methods: {
    async onEdit(id) {
      this.form = await getRoleById(id)
      this.showDialog = true
    },
    onDel(id) {
      this.$confirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async action => {
        await delRole(id)
        this.$message.success('操作成功')
        this.getList()
      })
    },
    async getList() {
      const { total, rows } = await getRoleList(this.page)
      this.page.total = total
      this.list = rows
    },
    onPageChange(val) {
      this.page.page = val
      this.getList()
    },
    onOpen() {},
    close() {
      this.$refs['formRef'].resetFields()
      this.form = {
        name: undefined,
        description: undefined
      }
      this.showDialog = false
    },
    handelConfirm() {
      this.$refs['formRef'].validate(async valid => {
        if (!valid) return
        if (this.form.id) {
          await addRole(this.form)
        } else {
          await addRole(this.form)
        }
        this.$message.success('操作成功')
        this.getList()
        this.close()
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
