/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const maintenanceDivisionManagementRouter = {
  path: '/maintenanceDivisionManagement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'maintenanceDivisionManagement',
  meta: {
    title: '维修分区管理',
    icon: 'eye-open'
  },
  children: [
    {
      path: 'sysLog',
      component: () => import('@/views/sysMonitor/sysLog'),
      name: 'sysLog',
      meta: { title: '系统日志', noCache: true }
    },
    {
      path: 'OnlineUsers',
      component: () => import('@/views/sysMonitor/OnlineUsers'),
      name: 'OnlineUsers',
      meta: { title: '在线用户', noCache: true }
    }
  ]
}

export default maintenanceDivisionManagementRouter
