<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-tabs>
          <el-tab-pane label="登录账户设置">
            <el-form
              ref="formRef"
              :model="form"
              :rules="rules"
              label-width="100px"
              style="width:350px;margin-left: 100px;"
            >
              <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="form.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  size="small"
                  @click="submit"
                >更新</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="个人详情">
            <!-- 放置个人详情 -->
            <user-info></user-info>
            <!-- <user-info /> -->
          </el-tab-pane>
          <el-tab-pane label="岗位详情">
            <!-- 放置岗位详情 -->
            <job-info></job-info>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getEmplyeeBaseInfo, saveUserDetailById } from '@/api/user'
import UserInfo from '@/views/employees/components/user-info'
import JobInfo from '@/views/employees/components/job-info'

export default {
  name: 'Detail',
  components: {
    UserInfo,
    JobInfo
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      form: { username: '', password: '' },
      rules: {
        username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },
  async created() {
    this.form = await getEmplyeeBaseInfo(this.id)
    this.form.password = ''
  },
  mounted() { },
  methods: {
    submit() {
      this.$refs.formRef.validate(async isOk => {
        if (!isOk) return
        await saveUserDetailById(this.form)
        this.$message.success('操作成功')
      })
    }
  }
}
</script>

<style>

</style>
