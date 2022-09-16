import Layout from '@/layout'
export default {
  path: '/attendances',
  component: Layout,
  children: [{
    // 默认路径,访问父路由/attendances直接方法这个子路由
    path: '',
    name: 'attendances',
    component: () => import('@/views/attendances/index.vue'),
    meta: { title: '考勤', icon: 'skill' }
  }]
}
