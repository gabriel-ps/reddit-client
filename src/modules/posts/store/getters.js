const posts = state => {
  return state.posts.children
}

const currentPost = state => {
  return state.currentPostIndex === null ? null : state.posts.children[state.currentPostIndex]
}

export default {
  posts,
  currentPost
}
