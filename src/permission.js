import router from '@/router/index'
import store from '@/store/index'

// 前置路由守卫
router.beforeEach(async(to, from, next) => {
  // to 去哪里的路由信息
  // from 从哪里来的信息
  // next方法: 控制能跳转
  // 如果没有登录则跳转登录页面 如果登录则允许跳转
  // 白名单 允许访问
  if (['/login', '/learnVuex', '/404'].includes(to.path)) {
    return next()
  }

  if (store.state.user.token) {
    /**
     * 简单写法
     * 不用vuex
     * **/
    // 如果获取用户信息为空
    if (!store.state.user.userInfo.userId) {
      // const { roles: { menus }} = await store.dispatch('user/getUserInfo')
      // console.log(menus, 'menus')
      // const filterRoutes = asyncRoutes.filter(t => menus.some(m => m.includes(t.children[0].name)))
      // router.addRoutes([
      //   ...filterRoutes,
      //   { path: '*', redirect: '/404', hidden: true }
      // ])
      // router.options.routes = [...constantRoutes, ...filterRoutes]
      /* 方法二  */
      const { roles: { menus }} = await store.dispatch('user/getUserInfo')
      const filterRoutes = await store.dispatch('permission/filterRoutes', menus)
      router.addRoutes([
        ...filterRoutes,
        { path: '*', redirect: '/404', hidden: true }
      ])
      next(to.path)
    }
    next()
  } else {
    next('/login')
  }
})

// 后置路由守卫 一般不用
router.afterEach((to, from, next) => {

})
