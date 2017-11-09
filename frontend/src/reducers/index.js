import { combineReducers } from 'redux'
import comments from './comments'

const nrBlog = combineReducers({
  comments
})

export default nrBlog