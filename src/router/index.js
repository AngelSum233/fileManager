import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
// import componyinfomanage from '../views/componyInfoManage.vue'
// import postinfomange from '../views/postinfomange.vue'
// import orderinfomange from '../views/orderinfomange.vue'
// import datamangeinfo from '../views/datamangeinfo.vue'
// import orderinfomange2 from '../views/orderinfomange2.vue'
import MainContent from '../views/MainContent.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    /* redirect重定向到某个组件 */
    // { path: '/', redirect: '/login' },
    // { path: '/login', component: Login },
    {
      path: '/',
      component: home,
      /* 子路由 */
      // redirect: '/welcome',
      children: [
        {
          path: '/componyinfomanage',
          name: '企业信息',
          component: MainContent
        },
        {
          path: '/componyinfomanage2',
          name: '企业信息',
          component: MainContent
        },
        {
          path: '/componyinfomanage21',
          name: '企业信息1',
          component: MainContent
        },
        {
          path: '/componyinfomanage22',
          name: '企业信息2',
          component: MainContent
        },
        {
          path: '/componyinfomanage1',
          name: '企业管理',
          component: MainContent
        },
        {
          path: '/postinfomange',
          name: '岗位信息',
          component: MainContent
        },
        {
          path: '/orderinfomange',
          name: '订单信息',
          component: MainContent
        },
        {
          path: '/orderinfomange2',
          name: '订单信息2',
          component: MainContent
        },
        {
          path: '/datamangeinfo',
          name: '数据管理',
          component: MainContent
        }
      ]
    }
  ]
})

export default router
