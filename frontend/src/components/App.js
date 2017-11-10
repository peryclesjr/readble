import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Principal from './Principal'
import Post from './Post'
import Footer from './Footer'
import NotFound from './NotFound'
import * as api from '../utils/api'

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
            <Header />
            <Switch>
              <Route exact path="/"
                render={() => <Principal posts={posts} categories={categories} />}
              />
              <Route exact path="/post/:id" component={Post} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
