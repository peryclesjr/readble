import { GET_CATEGORIES } from '../actions/categories'

export const categories = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return Object.assign({}, state, {
        data: action.categories
      })
    default:
      return state
  }
}
