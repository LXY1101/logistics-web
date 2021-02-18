/** When your routing table is too long, you can split it into small modules **/
import Layout from '@/layout'

const maintenanceClassificationManagementRouter = {
  path: '/maintenanceClassificationManagement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'maintenanceClassificationManagement',
  meta: {
    title: '维修分类管理',
    icon: 'form'
  },
  children: [
    {
      path: 'stock',
      component: () => import('@/views/warehoust/stock'),
      name: 'stock',
      meta: { title: '库存信息', noCache: true }
    },
    {
      path: 'using',
      component: () => import('@/views/warehoust/using'),
      name: 'using',
      meta: { title: '申请物品使用', noCache: true }
    },
    {
      path: 'purchase',
      component: () => import('@/views/warehoust/purchase'),
      name: 'purchase',
      meta: { title: '申请物品采购单', noCache: true }
    },
    {
      path: 'piece',
      component: () => import('@/views/warehoust/piece'),
      name: 'piece',
      meta: { title: '维护物品价格', noCache: true }
    }
  ]
}

export default maintenanceClassificationManagementRouter
