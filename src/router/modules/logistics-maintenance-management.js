/** When your routing table is too long, you can split it into small modules **/
import Layout from '@/layout'

const logisticsMaintenanceManagementRouter = {
  path: '/logisticsMaintenanceManagement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'logisticsMaintenanceManagement',
  meta: {
    title: '后勤维修管理',
    icon: 'skill'
  },
  children: [
    {
      path: 'examine',
      component: () => import('@/views/registration-management/examine'),
      name: 'examine',
      meta: { title: '审核报名', noCache: true }
    },
    {
      path: 'query',
      component: () => import('@/views/registration-management/query'),
      name: 'query',
      meta: { title: '查询报名', noCache: true }
    }
  ]

}

export default logisticsMaintenanceManagementRouter
