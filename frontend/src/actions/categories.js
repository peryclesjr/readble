import * as api from '../utils/api'

import { GET_CATEGORIES } from './ActionTypes'

export const getAllCategories = categories => {
  return {
    type: GET_CATEGORIES,
    categories: categories
  }
}

export const fetchCategories = () => {
  return dispatch => {
    return api
      .getAllCategories()
      .then(categories => dispatch(getAllCategories(categories)))
  }
}
