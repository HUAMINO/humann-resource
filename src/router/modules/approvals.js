import Layout from '@/layout'
export default {
  path: '/approvals',
  component: Layout,
  children: [{
    // 默认路径,访问父路由/approvals直接方法这个子路由
    path: '',
    name: 'approvals',
    component: () => import('@/views/approvals/index.vue'),
    meta: { title: '审批', icon: 'tree-table' }
  }]
}
