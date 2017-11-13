import { RECEIVE_CATEGORIES } from '../actions/categories'

function categories(state = { items: [] }, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        items: action.categories
      })
    default:
      return state
  }
}

export default categories
