import { RECEIVE_POSTS } from '../actions/posts'

function posts(state = { items: [] }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        items: action.posts
      })
    default:
      return state
  }
}

export default posts
