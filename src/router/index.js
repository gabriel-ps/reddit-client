import Vue from 'vue'
import Router from 'vue-router'

import core from '@/modules/core/routes'
import posts from '@/modules/posts/routes'

Vue.use(Router)

const routes = [
  ...core,
  ...posts
]

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.length) {
    document.title = to.matched[0].meta.title
  }
  next()
})

export default router
