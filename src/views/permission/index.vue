<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-tool>
        <el-button
          slot="after"
          size="small"
          type="primary"
          @click="onShowDialog()"
        >新增权限</el-button>
      </page-tool>
      <!-- 快速生成同样式的代码 -->
      <el-table :data="list" border row-key="id">
        <el-table-column label="名称" prop="name" align="center"></el-table-column>
        <el-table-column label="标识" prop="code" align="center"></el-table-column>
        <el-table-column label="描述" prop="description" align="center"></el-table-column>
        <el-table-column label="操作" prop="" align=" center">
          <template v-slot="{row}">
            <el-button type="text" @click="onEdit(row.id)">编辑</el-button>
            <el-button type="text" @click="onShowDialog({pid: row.id, type: row.type+1})">添加</el-button>
            <el-button type="text" @click="onDel(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 清空数据-通过v-if -->
    <add-perm v-if="showDialog" ref="addPermRef" :node="node" title="新增权限" :visible="showDialog" @close="showDialog = false"></add-perm>
  </div>
</template>

<script>
import { delPermission, getPermissionDetail, getPermissionList } from '@/api/permisson'
import { trnslateListToTree } from '@/utils'
import AddPerm from './components/add-perm.vue'
export default {
  name: 'Permission',
  components: { AddPerm },
  props: {},
  data() {
    return {
      list: [],
      showDialog: false,
      node: {}
    }
  },
  created() {
    this.getPermissionList()
  },
  mounted() {},
  methods: {
    async getPermissionList() {
      this.list = trnslateListToTree(await getPermissionList(), '0')
    },
    onShowDialog(node) {
      this.showDialog = true
      this.$nextTick(() => {
        Object.assign(this.$refs.addPermRef.form, node)
      })
    },
    onDel(id) {
      this.$confirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async action => {
        await delPermission(id)
        this.$message.success('操作成功')
        this.getPermissionList()
      })
    },
    async onEdit(id) {
      this.showDialog = true
      await this.$nextTick()
      this.$refs.addPermRef.form = await getPermissionDetail(id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
