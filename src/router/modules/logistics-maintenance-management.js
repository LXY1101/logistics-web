/** When your routing table is too long, you can split it into small modules **/
import Layout from '@/layout'

const logisticsMaintenanceManagementRouter = {
  path: '/logMaintenanceManagement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'logMaintenanceManagement',
  meta: {
    title: '后勤维修管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'queryLogMaintenance',
      component: () => import('@/views/logistics-maintenance-management/queryLogMaintenance'),
      name: 'queryLogMaintenance',
      meta: { title: '后勤维修管理', noCache: true }
    }
  ]

}

export default logisticsMaintenanceManagementRouter
