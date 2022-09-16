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

        <el-tree :data="list" :props="{label: 'name'}" default-expand-all>
          <template v-slot="{ data }">
            <el-row type="flex" align="middle" style="height: 40px; width: 100%">
              <el-col>{{ data.name }}</el-col>
              <el-col type="flex" justify="end">
                <span>{{ data.manager }}</span>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    操作<i
                      class="el-icon-arrow-down el-icon--right"
                    ></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>添加子部门</el-dropdown-item>
                    <el-dropdown-item>编辑部门</el-dropdown-item>
                    <el-dropdown-item>删除部门</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
          </template>
        </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Departments',
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          name: '总裁办',
          manager: '曹操',
          children: [{ name: '董事会', manager: '曹丕' }]
        },
        { name: '行政部', manager: '刘备' },
        { name: '人事部', manager: '孙权' }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.tree-card {
  padding: 30px 140px;
  font-size: 14px;
}
.el-dropdown-link {
  margin-left: 10px;
}
</style>
