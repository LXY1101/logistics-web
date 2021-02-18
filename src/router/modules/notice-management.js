/** When your routing table is too long, you can split it into small modules **/
import Layout from '@/layout'

const noticeManagementRouter={
  path:'/noticeManagement',
  component: Layout,
  redirect:'noRedirect',
  name:'noticeManagement',
  meta:{
    title:'通知管理',
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

export default noticeManagementRouter
