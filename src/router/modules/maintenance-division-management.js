/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const maintenanceDivisionManagementRouter = {
  path: '/maintenanceDivisionManagement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'maintenanceDivisionManagement',
  meta: {
    title: '维修分区管理',
    icon: 'form'
  },
  children: [
    {
      path: 'divisionInfo',
      component: () => import('@/views/division-management/divisionInfo'),
      name: 'divisionInfo',
      meta: { title: '维修分区管理', noCache: true }
    }
  ]
}

export default maintenanceDivisionManagementRouter
