import { GET_ALL_POSTS, GET_POST } from '../actions/posts'

export const posts = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return Object.assign({}, state, {
        data: action.posts
      })
    case GET_POST:
      return Object.assign({}, state, {
        data: action.post
      })
    default:
      return state
  }
}
