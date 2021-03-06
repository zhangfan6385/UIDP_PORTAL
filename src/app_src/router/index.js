import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

// 当你的项目页面越来越多之后，在开发环境之中使用 lazy-loading 会变得不太合适，每次更改代码触发热更新都会变得非常的慢。所以建议只在生成环境之中使用路由懒加载功能。
Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import { resolve } from 'uri-js';

/**
* hidden: true                   当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面(默认 false)
* alwaysShow: true               当设置 true 的时候永远会显示根菜单，不设置的情况下只有当子路由个数大于一个时才会显示根菜单
*                                当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式。只有一个时会将那个子路由当做根路由
* redirect: noredirect           当设置 noredirect 的时候该路由不会在面包屑导航中出现
* name:'router-name'             设定路由的名字，一定要填写不然 使用 <keep-alive> 时会出现各种问题
* meta : {
    title: 'title'               设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             设置该路由的图标
  }
**/
export const constantRouterMap = [
  //{ path: '/login', component: _import('app_src/views/login/index'), hidden: true },
  { path: '/404', component: _import('app_src/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    hidden: true,
    children: [{
      path: 'home',
      component: _import('app_src/views/home/index')
      //component:resolve=>_import(['app_src/views/home/index'],resolve)
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      //component: _import('app_src/views/dashboard/index')
      component:resolve=>require(['@/app_src/views/dashboard/index'],resolve)
    }]
  },
  {
    path: '/community',
    component: Layout,
    redirect: '/community/main/index',
    name: 'Community',
    hidden: true,
    children: [{
      path: 'community',
      //component: _import('app_src/views/community/index')
      component:resolve=>require(['@/app_src/views/community/index'],resolve)
    }, {
      path: 'main',
      redirect: '/community/main/index',
      //component: _import('app_src/views/community/main'),
      component:resolve=>require(['@/app_src/views/community/main'],resolve),
      children: [
        {
          path: 'index',
          //component: _import('app_src/views/community/index')
          component:resolve=>require(['@/app_src/views/community/index'],resolve)
        },
        {
          path: 'mycard',
          //component: _import('app_src/views/community/mycard')
          component:resolve=>require(['@/app_src/views/community/mycard'],resolve)
        },
        {
          path: 'mycollection',
          //component: _import('app_src/views/community/mycollection')
          component:resolve=>require(['@/app_src/views/community/mycollection'],resolve)
        },
        {
          path: 'newcard',
          //component: _import('app_src/views/community/newcard')
          component:resolve=>require(['@/app_src/views/community/newcard'],resolve)
        },
        {
          path: 'newscontent/:id',
          //component: _import('app_src/views/community/newscontent')
          component:resolve=>require(['@/app_src/views/community/newscontent'],resolve)
        }
      ]
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/sever',
    name: 'Sever',
    hidden: true,
    children: [{
      path: 'sever',
      //component: _import('app_src/views/sever/index')
      component:resolve=>require(['@/app_src/views/sever/index'],resolve)
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/sever',
    name: 'Severdetail',
    hidden: true,
    children: [{
      path: 'sever/:id',
      //component: _import('app_src/views/sever/detail')
      component:resolve=>require(['@/app_src/views/sever/detail'],resolve)
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/severcomponent',
    name: 'Severcomponent',
    hidden: true,
    children: [{
      path: 'severcomponent',
      //component: _import('app_src/views/severcomponent/index')
      component:resolve=>require(['@/app_src/views/severcomponent/index'],resolve)
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/severcomponent',
    name: 'Severcomponentdetail',
    hidden: true,
    children: [{
      path: 'componentdetail/:id',
      //component: _import('app_src/views/severcomponent/detail')
      component:resolve=>require(['@/app_src/views/severcomponent/detail'],resolve)
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/notice',
    name: 'notice',
    hidden: true,
    children: [{
      path: 'notice',
      //component: _import('app_src/views/notice/index')
      component:resolve=>require(['@/app_src/views/notice/index'],resolve)
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/noticecontent',
    name: 'noticecontent',
    hidden: true,
    children: [{
      path: 'noticecontent/:id',
      //component: _import('app_src/views/notice/noticecontent')
      component:resolve=>require(['@/app_src/views/notice/noticecontent'],resolve)
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/history',
    name: 'history',
    hidden: true,
    children: [{
      path: 'history',
      //component: _import('app_src/views/history/index')
      component:resolve=>require(['@/app_src/views/history/index'],resolve)
    },{
      path: 'versioncontent/:id',
      //component: _import('app_src/views/history/index')
      component:resolve=>require(['@/app_src/views/history/detail'],resolve)
    }]
  },
  /*
    {
      path: '/example',
      component: Layout,
      redirect: '/example/table',
      name: 'Example',
      meta: { title: '样例', icon: 'example' },
      children: [
        {
          path: 'table',
          name: 'Table',
          component: _import('app_src/views/table/index'),
          meta: { title: '表格', icon: 'table' }
        }
      ]
    },
  */

  { path: '*', redirect: 'app_src/views/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

