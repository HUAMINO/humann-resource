<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <!-- 左右布局 方式1 栅格系统 -->
        <!-- <el-row>
          <el-col :span="12">左</el-col>
          <el-col :span="12">右</el-col>
        </el-row> -->
        <!-- 左右布局 flex -->
        <!-- <el-row type="flex">
          <el-col>左</el-col>
          <el-col>右</el-col>
        </el-row> -->
        <tree-tool :data="company">
          <el-dropdown-item>添加子部门</el-dropdown-item>
        </tree-tool>
        <el-tree v-loading="isLoading" :data="list" :props="{label: 'name'}" default-expand-all>
          <template v-slot="{data}">
            <tree-tool :data="data">
              <el-dropdown-item @click.native="onAdd(data)">添加子部门</el-dropdown-item>
              <el-dropdown-item @click.native="onEdit(data)">编辑部门  </el-dropdown-item>
              <el-dropdown-item @click.native="onDel(data.id)">删除部门</el-dropdown-item>
            </tree-tool>
          </template>
        </el-tree>
      </el-card>
    </div>
    <add-dept ref="addDeptRef" :visible.sync="showDialog" :node="currentNode" @success="getList"></add-dept>
  </div>
</template>

<script>
import TreeTool from './comoonents/tree-tool.vue'
import { delDept, getDeptById, getList } from '@/api/department'
import { trnslateListToTree } from '@/utils'
import AddDept from './comoonents/add-dept.vue'

export default {
  name: 'Departments',
  components: {
    TreeTool,
    AddDept
  },
  props: {},
  data() {
    return {
      isLoading: false,
      currentNode: {}, // 当前操作的父部门
      showDialog: false,
      list: [],
      company: {
        name: '',
        manger: '负责人'
      }
    }
  },
  created() {
    this.getList()
  },
  mounted() {},
  methods: {
    async getList() {
      this.isLoading = true
      const { companyName, depts } = await getList()
      this.company.name = companyName
      this.list = trnslateListToTree(depts, '')
      this.isLoading = false
    },
    onAdd(node) {
      this.showDialog = true
      this.currentNode = node
    },
    onDel(id) {
      console.log('删除', id)
      this.$confirm('确认删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async action => {
          console.log('删除2', id)
          await delDept(id)
          this.$message.success('操作陈宫')
          this.getList()
        }).catch(() => {
        })
    },
    async onEdit(node) {
      this.currentNode = node
      this.$refs.addDeptRef.form = await getDeptById(node.id)
      this.showDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-card{
  padding: 30px 140px;
  font-size: 14px;
}
.el-dropdown-link{
  margin-left: 10px;
}
</style>
