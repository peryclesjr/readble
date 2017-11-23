import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Post from './post/Post'
import Posts from './post/Posts'
import PostsByCategory from './post/PostsByCategory'

import Menu from '../components/Menu'
import NotFound from '../components/NotFound'

import { fetchPosts, fetchPopularPosts } from '../actions/posts'

class Principal extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPosts())
    dispatch(fetchPopularPosts())
  }
  componentWillReceiveProps(nextProps) {
    const { location, dispatch } = this.props
    if (location.pathname !== nextProps.location.pathname) {
      dispatch(fetchPosts())
      dispatch(fetchPopularPosts())
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col l8">
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route path="/post/:id" component={Post} />
              <Route path="/:categoryPath/posts" component={PostsByCategory} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <div className="col l4">
            <Menu />
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Principal)
