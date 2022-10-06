import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
Vue.use(Vuex)

// 定义模块
const test = {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    setToken(state, token) {
      console.log('test的setToken')
      state.token = token
    }
  }
}

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    test,
    permission,
    tagsView
  },
  getters: {
    // showCount(state) {
    //   return 'count=' + state.count
    // }
    showCount: state => 'count=' + state.count,
    ...getters

  },

  state: {
    count: 1,
    age: 0
  },
  mutations: {
    setToken() {
      console.log('根模块的setToken')
    },
    add(state) {
      state.count++
    },
    addAge(state) {
      state.age++
    },
    // 传参
    addN(state, number) {
      state.count += number
    }
  },
  // 在actions里面是用来进行异步操作 比如发送ajax请求,定时器等
  actions: {
    addSync(context, b) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    // 传参
    addNSync(context, number) {
      setTimeout(() => {
        context.commit('addN', number)
      }, 1000)
    }
  }
})

export default store
