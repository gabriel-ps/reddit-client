import axios from 'axios'
const api = 'https://www.reddit.com/top.json'

const getPosts = async ({ commit }) => {
  const response = await axios.get(api)

  if (response != null) {
    commit('SET_POSTS', response.data.data)
  }
}

const setCurrentPostIndex = ({ commit }, index) => {
  commit('SET_CURRENT_POST_INDEX', index)
}

export default {
  getPosts,
  setCurrentPostIndex
}
