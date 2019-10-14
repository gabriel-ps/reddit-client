import PostList from './views/PostList.vue'

export default [
  {
    path: '/',
    component: PostList,
    name: 'posts.list',
    meta: {
      title: 'Posts'
    }
    /* children: [
      {
        path: ':id',
        component: PostShow,
        name: 'posts.show'
      }
    ] */
  }
]
