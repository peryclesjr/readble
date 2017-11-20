import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Posts from '../components/Posts'
import { fetchPosts, fetchPopularPosts } from '../actions/posts'
import { Route, Switch, withRouter } from 'react-router-dom'
import Post from '../containers/Post'
import PostsByCategory from '../containers/PostsByCategory'
import NotFound from '../components/NotFound'
import Menu from '../components/Menu'

class Principal extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts())
    this.props.dispatch(fetchPopularPosts())
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
      <div className="row">
        <div className="col l8 s12">
          <Switch>
            <Route exact path="/" render={() => (<Posts posts={posts} />)} />
            <Route path="/post/:id" component={Post} />
            <Route path="/:categoryPath/posts" component={PostsByCategory} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="col l4">
          <Menu />
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
