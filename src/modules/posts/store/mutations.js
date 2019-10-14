import Post from '../domain/Post'

const SET_POSTS = (state, posts) => {
  posts.children = posts.children.map(post => new Post(post))
  state.posts = posts
}

const SET_CURRENT_POST_INDEX = (state, index) => {
  state.currentPostIndex = index
}

export default {
  SET_POSTS,
  SET_CURRENT_POST_INDEX
}
