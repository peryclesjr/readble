import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import Post from './post/Post'
import AddPost from './post/AddPost'
import PostsByCategory from './post/PostsByCategory'

import Menu from '../components/Menu'
import Posts from '../components/Posts'
import NotFound from '../components/NotFound'

import { fetchPosts } from '../actions/posts'

class Principal extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPosts())
  }
  componentWillReceiveProps(nextProps) {
    const { location, dispatch } = this.props
    if (location.pathname !== nextProps.location.pathname) {
      dispatch(fetchPosts())
    }
  }
  render() {
    const { posts } = this.props
    return (
      <div className="container">
        <div className="row">
          <div className="col l8 s12">
            <Switch>
              <Route exact path="/" render={() => <Posts posts={posts} />} />
              <Route path="/post/:id" component={Post} />
              <Route exact path="/posts" component={AddPost} />
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

Principal.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items || [],
  popPosts: state.posts.items || []
})

export default withRouter(connect(mapStateToProps)(Principal))
