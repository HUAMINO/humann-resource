import { login } from '@/api/user'
import { getToken, removeToken, setToken } from '@/utils/auth'
import { Message } from 'element-ui'

export default {
  namespaced: true,
  state: {
    token: getToken() // 获取cookie里面的数据
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      // 调用 将数据存储到cookie中
      setToken(token)
    },
    removeToken(state) {
      state.token = null
      removeToken()
    }
  },
  actions: {
    async login(context, data) {
      try {
        // 判断请求是否成功
        const { data: { success, data: token, message }} = await login(data)
        // 发送请求，让mutation中的setToken去存储数据
        if (success) {
          context.commit('setToken', token)
        } else {
          Message.error(message)
        }
      } catch (e) {
        Message.error('服务器出错误')
      }
    }
  }
}
