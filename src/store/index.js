import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const test = {
  // 命名空间,指定模块名来调用方法
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    setToken(state, token) {
      console.log('test模块的setToken')
      state.token = token
    }
  }
}

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    test
  },
  // 定义计算属性
  getters: {
    /*
    showCount(state) {
      return 'count=' + state.count
    }
    */
    // 用箭头函数简化
    showCount: state => 'count=' + state.count,
    ...getters
  },
  // 定义数据
  state: {
    count: 0,
    age: 20
  },
  // 定义同步方法
  mutations: {
    setToken() {
      console.log('根模块的setToken')
    },
    add(state) {
      // 需要通过state参数修改数据
      state.count++
    },
    // 传参
    addN(state, num) {
      state.count += num
    }
  },
  // 定义异步方法
  actions: {
    addSync(context) {
      // context等同于$store
      setTimeout(() => {
        // 需要调用mutations,然后修改数据
        context.commit('add')
        // 在页面当中$store.commit('add')
      }, 500)
    },
    // 传参
    addNSync(context, num) {
      // context等同于$store
      setTimeout(() => {
        // 需要调用mutations,然后修改数据
        context.commit('addN', num)
      }, 500)
    }
  }
})

export default store
