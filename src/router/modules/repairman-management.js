/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const repairmanManagementRouter = {
  path: '/repairmanManagement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'repairmanManagement',
  meta: {
    title: '维修人员管理',
    icon: 'peoples'
  },
  children: [
    {
      path: 'repairmanInfo',
      component: () => import('@/views/repairman-management/repairmanInfo'),
      name: 'repairmanInfo',
      meta: { title: '维修人员管理', noCache: true }
    }
  ]
}

export default repairmanManagementRouter
