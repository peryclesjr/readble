import React from 'react'
import Posts from './Posts'
import PostsList from '../containers/PostsList'
import About from './About'
import PopularPosts from './PopularPosts'
import Category from './Category'
import sortBy from 'sort-by'
import * as api from '../utils/api'

class Principal extends React.Component {
  state = { posts: [], categories: [] }

  getAllPosts = () => {
    api.getAllPosts().then(posts => this.setState({ posts }))
  }

  getAllCategories = () => {
    api.getAllCategories().then(categories => this.setState({ categories }))
  }

  componentDidMount() {
    this.getAllCategories()
    this.getAllPosts()
  }

  render() {
    const { posts, categories } = this.state
    return (
      <div className="row">
        <div className="col l8 s12">
          <Posts posts={posts} />
        </div>
        <div className="col l4">
          <About />
          <PopularPosts posts={posts.sort(sortBy('-voteScore')).slice(0,5)} />
          <Category categories={categories} />
        </div>
      </div>
    )
  }
}

export default Principal
