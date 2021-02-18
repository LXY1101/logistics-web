/** When your routing table is too long, you can split it into small modules **/
import Layout from '@/layout'

const noticeManagementRouter = {
  path: '/noticeManagement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'noticeManagement',
  meta: {
    title: '通知管理',
    icon: 'email'
  },
  children: [
    {
      path: 'queryNotice',
      component: () => import('@/views/notice-management/queryNotice'),
      name: 'queryNotice',
      meta: { title: '通知查询', noCache: true }
    },
    {
      path: 'publishingNotice',
      component: () => import('@/views/notice-management/publishingNotice'),
      name: 'publishingNotice',
      meta: { title: '发布通知', noCache: true }
    }
  ]
}

export default noticeManagementRouter
