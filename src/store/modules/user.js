import { getEmplyeeBaseInfo, login, getUserBaseInfo } from '@/api/user'
import { getToken, removeToken, setToken } from '@/utils/auth'
// import { Message } from 'element-ui'

export default {
  namespaced: true,
  actions: {
    // 登录
    async login(context, data) {
      const token = await login(data)
      context.commit('setToken', token)
    },
    // 退出
    logout(context) {
      context.commit('removeToken')
      context.commit('removeUserInfo')
    },
    // 获取用户基本资料
    async getUserInfo(context) {
      const u = await getUserBaseInfo()
      const e = await getEmplyeeBaseInfo(u.userId)
      console.log(u)
      console.log(e)
      // const o = { ...u, ...e }
      // o.staffPhoto = 'http://q6cu3t6jv.bkt.clouddn.com/1063705989926227968?t=1582797590950' // 模拟找不到图片
      context.commit('setUserInfo', { ...u, ...e })
    }

  },
  mutations: {
    setToken(state, data) {
      state.token = data
      setToken(data)
    },
    removeToken(state) {
      state.token = null
      removeToken()
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    removeUserInfo(state) {
      state.userInfo = {}
    }
  },
  state: {
    // token: getToken()
    token: getToken(),
    userInfo: {}
  }
}
