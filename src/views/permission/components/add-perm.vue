<template>
  <div>
    <el-dialog v-bind="$attrs" :title="form.id?'编辑权限':'新增权限'" v-on="$listeners" @open="onOpen" @close="onClose">
      <el-form ref="formRef" :model="form" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="权限名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入权限名称" clearable :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="权限标识" prop="code">
          <el-input v-model="form.code" placeholder="请输入权限标识" clearable :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="权限描述" prop="description">
          <el-input v-model="form.description" placeholder="请输入权限描述" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="开启" prop="enVisible">
          <el-switch v-model="form.enVisible" active-value="1" inactive-value="0" on-active="0"></el-switch>
        </el-form-item>
      </el-form>
      <el-row slot="footer" type="flex" justify="center">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="handelConfirm">确定</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import { addPermission, updatePermission } from '@/api/permisson'
export default {
  components: {},
  inheritAttrs: false,
  props: [],
  data() {
    return {
      form: {
        name: undefined,
        code: undefined,
        description: undefined,
        enVisible: false,
        pid: '0',
        type: 1
      },
      rules: {
        name: [],
        code: [{
          required: true,
          message: '请输入权限标识',
          trigger: 'blur'
        }],
        description: []
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onOpen() {},
    onClose() {
      this.$refs['formRef'].resetFields()
    },
    close() {
      // 清空数据-手动
      // this.form = {
      //   name: undefined,
      //   code: undefined,
      //   description: undefined,
      //   enVisible: '0'
      // }
      // 清空数据-通过$options
      // this.form = this.$options.data().form
      this.$emit('close')
    },
    handelConfirm() {
      this.$refs['formRef'].validate(async valid => {
        if (!valid) return
        if (this.form.id) {
          await updatePermission(this.form)
        } else {
          await addPermission(this.form)
        }

        this.$parent.getPermissionList()
        this.$message('添加成功')
        this.close()
      })
    }
  }
}

</script>
<style>
</style>
