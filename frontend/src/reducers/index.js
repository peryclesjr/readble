import { combineReducers } from 'redux'

import { comments } from './comments'
import { posts, postDetailed, popularPosts } from './posts'
import { categories } from './categories'

const nrBlog = combineReducers({
  comments,
  posts,
  postDetailed,
  popularPosts,
  categories
})

export default nrBlog
