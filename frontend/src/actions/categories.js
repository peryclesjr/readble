import * as api from '../utils/api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const receiveCategories = categories => {
  return {
    type: RECEIVE_CATEGORIES,
    categories: categories
  }
}

export const fetchCategories = () => {
  return dispatch => {
    return api.getAllCategories().then(categories => dispatch(receiveCategories(categories)))
  }
}