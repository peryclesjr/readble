import React from 'react'
import About from './About'
import PopularPosts from './PopularPosts'
import Category from './Category'
import AddPost from './AddPost'

const Menu = ({ posts }) => (
  <div>
    <AddPost />
    <About />
    <PopularPosts posts={posts} />
    <Category />
  </div>
)

export default Menu
