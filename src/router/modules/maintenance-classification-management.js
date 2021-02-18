/** When your routing table is too long, you can split it into small modules **/
import Layout from '@/layout'

const maintenanceClassificationManagementRouter = {
  path: '/maintenanceClassificationManagement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'maintenanceClassificationManagement',
  meta: {
    title: '维修分类管理',
    icon: 'table'
  },
  children: [
    {
      path: 'classification',
      component: () => import('@/views/classification-management/classification'),
      name: 'classification',
      meta: { title: '维修分类管理', noCache: true }
    }
  ]
}

export default maintenanceClassificationManagementRouter
