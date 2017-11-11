import { combineReducers } from 'redux'
import comments from './comments'
import posts from './posts'

const nrBlog = combineReducers({
  comments,
  posts
})

export default nrBlog