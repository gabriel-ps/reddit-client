import NotFound from './views/NotFound.vue'

export default [
  {
    path: '/',
    redirect: { name: 'posts-list' }
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      title: 'Not Found'
    }
  }
]
