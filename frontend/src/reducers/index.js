import { combineReducers } from 'redux'
import comments from './comments'
import posts from './posts'
import categories from './categories'

const nrBlog = combineReducers({
  comments,
  posts,
  categories
})

export default nrBlog
