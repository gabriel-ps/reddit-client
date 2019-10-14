import Post from '../domain/Post'

const SET_POSTS = (state, posts) => {
  posts.children = posts.children.map(post => new Post(post))
  state.posts = posts
}

export default {
  SET_POSTS
}
