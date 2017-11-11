import React from 'react'
import Posts from './Posts'
import About from './About'
import PopularPosts from './PopularPosts'
import Category from './Category'

class Principal extends React.Component {
  render() {
    const { posts, categories } = this.props
    return (
      <div className="row">
        <div className="col l8 s12">
          <Posts posts={posts} />
        </div>
        <div className="col l4">
          <About />
          <PopularPosts posts={posts} />
          <Category categories={categories} />
        </div>
      </div>
    )
  }
}

export default Principal
