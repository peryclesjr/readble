import React from 'react'
import { Route } from 'react-router-dom'
import Principal from './Principal'
import Footer from './Footer'
import * as api from '../API/ServerAPI'

class App extends React.Component {
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
      <div>
        <div className="light-grey">
          <div className="content" style={{ maxWidth: 1400 }}>
            <header className="container center padding-32">
              <h1>
                <b>Nossas Rotas Blog</b>
              </h1>
              <p>
                Welcome to the blog of <span className="tag">Ivo & Mari</span>
              </p>
            </header>
            <Route
              exact
              path="/"
              render={() => <Principal posts={posts} categories={categories} />}
            />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
