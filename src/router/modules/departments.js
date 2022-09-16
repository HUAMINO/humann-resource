import Layout from '@/layout'
export default {
  path: '/departments',
  component: Layout,
  children: [{
    // 默认路径,访问父路由/departments直接方法这个子路由
    path: '',
    name: 'departments',
    component: () => import('@/views/departments/index.vue'),
    meta: { title: '组织架构', icon: 'tree' }
  }]
}
