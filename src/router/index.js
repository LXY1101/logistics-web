/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import sysManagementRouter from './modules/sysManagement'
import maintenanceDivisionManagementRouter from './modules/maintenance-division-management'
import logisticsMaintenanceManagementRouter from './modules/logistics-maintenance-management'
import noticeManagementRouter from './modules/notice-management'
import repairmanManagementRouter from './modules/repairman-management'
import lostPropertyManagementRouter from './modules/lost-property-management'
import marketManagementRouter from './modules/market-management'
import maintenanceClassificationManagementRouter from './modules/maintenance-classification-management'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,// 不在侧边栏线上
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',//重定向地址，在面包屑中点击会重定向去的地址
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: '首页',//设置该路由在侧边栏和面包屑中展示的名字
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [


  /** when your routing map is too long, you can split it into small modules **/

  noticeManagementRouter,
  logisticsMaintenanceManagementRouter,
  maintenanceDivisionManagementRouter,
  maintenanceClassificationManagementRouter,
  lostPropertyManagementRouter,
  marketManagementRouter,
  repairmanManagementRouter,
  sysManagementRouter,


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
