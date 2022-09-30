import { asyncRoutes, constantRoutes } from '@/router'
export default {
  namespaced: true,
  state: {
    routes: constantRoutes
  },
  mutations: {
    setRoutes(state, filterRoutes) {
      state.routes = [...constantRoutes, ...filterRoutes]
    }
  },
  removeRoutes(state) {
    state.routes = constantRoutes
  },
  actions: {
    filterRoutes(context, menus) {
      const filterRoutes = asyncRoutes.filter(t => menus.some(m => m.includes(t.children[0].name)))
      context.commit('setRoutes', filterRoutes)
      return filterRoutes
    }
  }
}
