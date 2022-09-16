import Layout from '@/layout'
export default {
  path: '/setting',
  component: Layout,
  children: [{
    // 默认路径,访问父路由/setting直接方法这个子路由
    path: '',
    name: 'setting',
    component: () => import('@/views/setting/index.vue'),
    meta: { title: '公司设置', icon: 'setting' }
  }]
}
