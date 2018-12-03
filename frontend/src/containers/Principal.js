import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { fetchPopularPosts, fetchPosts } from '../actions/posts'

import Menu from '../components/Menu'
import NotFound from '../components/NotFound'
import Posts from './post/PostList'
import PostsByCategory from './post/PostsByCategory'

import Post from './post/PostWrapper'

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
              <Route path="/:category/:id" component={Post} />
              <Route path="/:category" component={PostsByCategory} />
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
