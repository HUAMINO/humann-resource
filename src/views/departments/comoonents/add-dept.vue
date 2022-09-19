<template>
  <div>
    <el-dialog :visible="visible" v-bind="$attrs" :title=" form.id? '编辑部门' : '新增部门'" v-on="$listeners" @open="onOpen" @close="onClose">
      <el-form ref="formRef" :model="form" :rules="rules" size="medium" label-width="120px">
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入部门名称" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="部门编码" prop="code">
          <el-input v-model="form.code" placeholder="请输入部门编码" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="部门负责人" prop="manger">
          <el-select v-model="form.manger" placeholder="请输入部门负责人" clearable :style="{width: '100%'}">
            <el-option
              v-for="(item, index) in managerOptions"
              :key="index"
              :label="item.username"
              :value="item.username"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍" prop="introduce">
          <el-input
            v-model="form.introduce"
            type="textarea"
            placeholder="请输入部门介绍"
            :autosize="{minRows: 4, maxRows: 4}"
            :style="{width: '100%'}"
          ></el-input>
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
import { getEmployeeSimple } from '@/api/employees'
import { addDept, getList, UpdateDept } from '@/api/department'
export default {
  components: {},
  inheritAttrs: false,
  props: {
    visible: {
      type: Boolean,
      require: true
    },
    node: {
      type: Object,
      require: true
    }
  },
  data() {
    const checkName = async(rule, value, callback) => {
      // 同级部门中禁止出现重复部门
      // 理解：当前添加的部门名称不能和兄弟们重名
      // 当前添加的部门名称：value/ this.from.name
      // 兄弟部门this.node.children
      let brothers
      if (this.form.id) {
        const allDepts = (await getList()).depts
        brothers = allDepts.filter(t => t.pid === this.form.pid && t.id !== this.form.id)
      } else {
        brothers = this.node.children || []
      }
      const f = brothers.find(t => t.name === value)
      if (!f) {
        callback()
      } else {
        callback(new Error('存在重复名称的兄弟部门'))
      }
    }
    const checkCode = async(rule, value, callback) => {
      const allDepts = (await getList()).depts
      let f
      if (this.form.id) {
        f = allDepts.filter(t => t.id !== this.form.id).find(t => t.code === value)
      } else {
        f = allDepts.find(t => t.code === value)
      }
      if (!f) {
        callback()
      } else {
        callback(new Error('存储重复编号的部门'))
      }
    }
    return {
      form: {
        name: undefined,
        code: undefined,
        manager: undefined,
        introduce: undefined
      },
      rules: {
        name: [{
          required: true,
          message: '请输入部门名称',
          trigger: 'blur'
        },
        { min: 1, max: 50, message: '请输入1-50个字符', trigger: 'blur' },
        { validator: checkName, trigger: 'blur' }
        ],
        code: [{
          required: true,
          message: '请输入部门编码',
          trigger: 'blur'
        },
        { min: 1, max: 50, message: '请输入1-50个字符', trigger: 'blur' },
        { validator: checkCode, trigger: 'blur' }
        ],
        manager: [{
          required: true,
          message: '请输入部门负责人',
          trigger: 'blur'
        },
        { min: 1, max: 50, message: '请输入1-50个字符', trigger: 'blur' }
        ],
        introduce: [{
          required: true,
          message: '请输入部门介绍',
          trigger: 'blur'
        },
        { min: 1, max: 50, message: '请输入1-300个字符', trigger: 'blur' }
        ]
      },
      managerOptions: []
    }
  },
  computed: {},
  watch: {
  },
  async created() {
    this.managerOptions = await getEmployeeSimple()
  },
  mounted() {},
  methods: {
    onOpen() {},
    onClose() {
      // 对整个表单进行重置
      this.$refs['formRef'].resetFields()
      this.form = {
        name: undefined,
        code: undefined,
        manager: undefined,
        introduce: undefined
      }
    },
    close() {
      this.$emit('update:visible', false)
    },
    handelConfirm() {
      this.$refs['formRef'].validate(async valid => {
        if (!valid) return
        if (this.form.id) {
          await UpdateDept(this.form)
        } else {
          await addDept({
            ...this.form,
            pid: this.node.id
          })
        }
        this.$message.success('操作成功')
        this.$emit('success')
        this.close()
      })
    }
  }
}

</script>
<style>
</style>
