import * as api from '../utils/api'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export const getAllCategories = categories => {
  return {
    type: GET_CATEGORIES,
    categories: categories
  }
}

export const fetchCategories = () => {
  return dispatch => {
    return api.getAllCategories().then(categories => dispatch(getAllCategories(categories)))
  }
}