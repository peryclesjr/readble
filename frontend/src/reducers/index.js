import { combineReducers } from 'redux'

import { comments } from './comments'
import { posts, postDetailed, popularPosts, updatePost } from './posts'
import { categories } from './categories'

const nrBlog = combineReducers({
  comments,
  posts,
  postDetailed,
  popularPosts,
  updatePost,
  categories
})

export default nrBlog
