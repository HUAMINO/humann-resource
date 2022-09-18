import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

// 静态路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    // 首页
    path: '/', // 默认根路由      // 浏览器url#后的路径如果检测到是'/' 那么触发重定向属性  找到该属性后配置新的路径 进行自动跳转
    component: Layout,
    redirect: '/dashboard', // 路由重定向属性
    children: [{
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/learnVuex',
    component: () => import('@/views/learnVuex/index'),
    hidden: true
  }
]

// 动态路由
import employees from './modules/employees.js'
import approvals from './modules/approvals.js'
import attendances from './modules/attendances'
import departments from './modules/departments.js'
import permission from './modules/permission.js'
import salarys from './modules/salarys.js'
import setting from './modules/setting.js'
import social from './modules/social.js'
export const asyncRoutes = [
  employees,
  approvals,
  attendances,
  departments,
  permission,
  salarys,
  setting,
  social
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: [...constantRoutes, ...asyncRoutes]
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
