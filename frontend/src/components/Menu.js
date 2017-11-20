import React from 'react'
import About from './About'
import PopularPosts from './PopularPosts'
import Category from './Category'
import AddPost from './AddPost'

const Menu = () => (
  <div>
    <AddPost />
    <About />
    <PopularPosts />
    <Category />
  </div>
)

export default Menu
