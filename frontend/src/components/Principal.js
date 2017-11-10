import React from 'react'
import Post from './Post'
import About from './About'
import PopularPosts from './PopularPosts'
import Category from './Category'

class Principal extends React.Component {

  render() {
    const { posts, categories } = this.props
    return (
      <div className="row">

        <div className="col l8 s12">
          {this.state.posts.map(post => (
            <div key={post.id} className="card-4 margin white">
              <Post key={post.id} post={post} />
            </div>
          ))}
        </div>

        <div className="col l4">

          <div className="card margin margin-top">
            <About />
          </div>

          <div className="card margin">
            <div className="container padding">
              <h4>Popular Posts</h4>
            </div>
            <PopularPosts posts={posts} />
          </div>

          <div className="card margin">
            <div className="container padding">
              <h4>Category</h4>
            </div>
            <Category categories={categories} />
          </div>

        </div>

      </div>
    )
  }

}

export default Principal