import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import componyinfomanage from '../views/componyInfoManage.vue'
import postinfomange from '../views/postinfomange.vue'
import orderinfomange from '../views/orderinfomange.vue'
import datamangeinfo from '../views/datamangeinfo.vue'

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
          component: componyinfomanage
        },
        {
          path: '/postinfomange',
          name: '岗位信息',
          component: postinfomange
        },
        {
          path: '/orderinfomange',
          name: '订单信息',
          component: orderinfomange
        },
        {
          path: '/datamangeinfo',
          name: '数据管理',
          component: datamangeinfo
        }
      ]
    }
  ]
})

export default router
