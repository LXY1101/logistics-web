/** When your routing table is too long, you can split it into small modules **/
import Layout from '@/layout'

const marketManagementRouter = {
  path: '/marketManagement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'marketManagement',
  meta: {
    title: '二手市场管理',
    icon: 'shopping'
  },
  children: [
    {
      path: 'marketInfo',
      component: () => import('@/views/market-management/marketInfo'),
      name: 'marketInfo',
      meta: { title: '二手市场管理', noCache: true }
    }
  ]
}

export default marketManagementRouter
