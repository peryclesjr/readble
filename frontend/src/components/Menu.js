import React from 'react'
import About from './About'
import PopularPosts from '../containers/post/PopularPosts'
import Category from '../containers/Category'
import AddPostButton from './AddPostButton'

const Menu = () => (
  <div>
    <AddPostButton />
    <About />
    <PopularPosts />
    <Category />
  </div>
)

export default Menu
