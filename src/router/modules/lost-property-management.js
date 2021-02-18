/** When your routing table is too long, you can split it into small modules **/
import Layout from '@/layout'

const lostPropertyManagementRouter={
  path:'/lostPropertyManagement',
  component: Layout,
  redirect:'noRedirect',
  name:'lostPropertyManagement',
  meta:{
    title:'失物招领管理',
    icon:'form'
  },
  children:[
    {
      path:'queryActivity',
      component: () => import('@/views/activity-management/queryActivity'),
      name: 'queryActivity',
      meta: {title: '活动查询',noCache:true}
    },
    {
      path:'publishing',
      component: () => import('@/views/activity-management/publishingActivities'),
      name: 'publishing',
      meta: {title: '发布活动',noCache:true}
    }
  ]
}

export default lostPropertyManagementRouter
