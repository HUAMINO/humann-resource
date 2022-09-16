import Layout from '@/layout'
export default {
  path: '/salarys',
  component: Layout,
  children: [{
    // 默认路径,访问父路由/salarys直接方法这个子路由
    path: '',
    name: 'salarys',
    component: () => import('@/views/salarys/index.vue'),
    meta: { title: '工资', icon: 'money' }
  }]
}
