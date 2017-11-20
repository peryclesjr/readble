import { combineReducers } from 'redux'

import { comments } from './comments'
import { posts, popularPosts } from './posts'
import { categories } from './categories'

const nrBlog = combineReducers({
  comments,
  posts,
  popularPosts,
  categories
})

export default nrBlog
