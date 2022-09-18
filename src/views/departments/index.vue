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
          <tree-tool :data='company'>
            <el-dropdown-item>添加子部门</el-dropdown-item>
          </tree-tool>
          <el-tree :data="list" :props="{label: 'name'}" default-expand-all>
            <template v-slot="{data}">
              <tree-tool :data="data">
                <el-dropdown-item @click.native="onAdd">添加子部门</el-dropdown-item>
                <el-dropdown-item @click.native="onEdit">编辑部门  </el-dropdown-item>
                <el-dropdown-item @click.native="onDel">删除部门</el-dropdown-item>
              </tree-tool>
            </template>
          </el-tree>
        </el-card>
    </div>
  </div>
</template>

<script>
import TreeTool from './comoonents/tree-tool.vue'
import { getList } from '@/api/department'
import { trnslateListToTree } from '@/utils'

export default {
  name: 'Departments',
  components: {
    TreeTool
  },
  props: {},
  data() {
    return {
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
      const { companyName, depts } = await getList()
      this.company.name = companyName
      this.list = trnslateListToTree(depts, '')
    },
    onAdd(id) {
      console.log('添加')
    },
    onDel(id) {
      console.log('删除')
    },
    onEdit() {
      console.log('编辑')
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
