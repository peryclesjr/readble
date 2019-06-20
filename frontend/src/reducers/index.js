import { combineReducers } from 'redux'

import { comments } from './comments'
import {
  posts,
  postDetailed,
  updatePost,
  preparePostForm
} from './posts'
import { categories } from './categories'

const nrBlog = combineReducers({
  comments,
  posts,
  postDetailed,
  preparePostForm,
  updatePost,
  categories
})

export default nrBlog
