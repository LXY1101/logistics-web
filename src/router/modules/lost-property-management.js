/** When your routing table is too long, you can split it into small modules **/
import Layout from '@/layout'

const lostPropertyManagementRouter = {
  path: '/lostPropertyManagement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'lostPropertyManagement',
  meta: {
    title: '失物招领管理',
    icon: 'fullscreen'
  },
  children: [
    {
      path: 'queryProperty',
      component: () => import('@/views/lost-property-management/queryProperty'),
      name: 'queryProperty',
      meta: { title: '失物招领管理', noCache: true }
    }
  ]
}

export default lostPropertyManagementRouter
