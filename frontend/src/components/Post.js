import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPost } from '../actions/posts'

class Post extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(fetchPost(match.params.id))
  }
  render() {
    return (
      <div className="container">
        {this.props.post}
      </div>
    )
  }
}

Post.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  post: state.posts.item || 'indefinido'
})

export default connect(mapStateToProps)(Post)
