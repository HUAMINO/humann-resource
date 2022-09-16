import Layout from '@/layout'
export default {
  path: '/social',
  component: Layout,
  children: [{
    // 默认路径,访问父路由/social直接方法这个子路由
    path: '',
    name: 'social',
    component: () => import('@/views/social/index.vue'),
    meta: { title: '社保', icon: 'table' }
  }]
}
