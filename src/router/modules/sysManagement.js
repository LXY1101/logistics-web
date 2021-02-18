/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const sysManagementRouter={
  path:'/sysManagement',
  component: Layout,
  redirect:'noRedirect',
  name:'SysManagement',
  meta:{
    title:'系统管理',
    icon:'setting'
  },
  children:[
    {
      path:'user',
      component: () => import('@/views/sysManagement/user'),
      name: 'user',
      meta: {title: '用户管理',noCache:true}
    },
    {
      path:'role',
      component: () => import('@/views/sysManagement/role'),
      name: 'role',
      meta: {title: '角色管理',noCache:true}
    },
    {
      path: 'menu',
      component: () => import('@/views/sysManagement/menu'),
      name: 'menu',
      meta: { title: '菜单管理', noCache: true }
    }
  ]

}
export default sysManagementRouter
