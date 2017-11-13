import { RECEIVE_POSTS, GET_POST } from '../actions/posts'

export const posts = (state = { items: [] }, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        items: action.posts
      })
    case GET_POST:
      return Object.assign({}, state, {
        item: action.post
      })
    default:
      return state
  }
}
