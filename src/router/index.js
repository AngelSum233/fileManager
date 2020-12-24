import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import MainContent from '../views/MainContent.vue'
import AllArticle from '../views/AllArticle.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {
          path: '/content',
          name: 'content',
          component: MainContent
        },
        {
          path: '/allArticle',
          name: 'allArticle',
          component: AllArticle
        }
      ]
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
