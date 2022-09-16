import Layout from '@/layout'
export default {
  path: '/permission',
  component: Layout,
  children: [{
    // 默认路径,访问父路由/permission直接方法这个子路由
    path: '',
    name: 'permission',
    component: () => import('@/views/permission/index.vue'),
    meta: { title: '权限管理', icon: 'lock' }
  }]
}
