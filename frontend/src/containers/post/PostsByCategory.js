import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Posts from './Posts'
import { fetchPostsByCategory } from '../../actions/posts'

class PostsByCategory extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(fetchPostsByCategory(match.params.category))
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.category !== nextProps.posts[0].category) {
      const { dispatch, match } = this.props
      dispatch(fetchPostsByCategory(match.params.category))
    }
  }
  render() {
    const { posts } = this.props
    return (
      <div>
        {posts.length > 0 ? (
          <Posts posts={posts} />
        ) : (
          <h3 className="padding-large">
            Sorry! There aren't posts in this category.
          </h3>
        )}
      </div>
    )
  }
}

PostsByCategory.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items || []
})

export default connect(mapStateToProps)(PostsByCategory)
