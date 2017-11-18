import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Posts from '../components/Posts'
import { fetchPostsByCategory } from '../actions/posts'

class PostsByCategory extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(fetchPostsByCategory(match.params.categoryPath))
  }
  render() {
    const { posts } = this.props
    return (
      <div>
        {
          posts.length > 0
            ? <Posts posts={posts} />
            : <h3 className="padding-large">
                Sorry! There aren't posts in this category.
              </h3>
        }
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