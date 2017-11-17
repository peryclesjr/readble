import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchCommentsByPost } from '../actions/comments'
import Authorship from '../components/Authorship'
import AddComment from '../containers/AddComment'

class Comment extends React.Component {
  componentDidMount() {
    const { dispatch, postId } = this.props
    console.log('POST_ID:::', postId)
    dispatch(fetchCommentsByPost(postId))
  }
  render() {
    const { comments, postId } = this.props
    return (
      <div className="col l12 padding-large">
        {comments.map(comment => (
          <div key={comment.id}>
            <Authorship author={comment.author} timestamp={comment.timestamp} />
            <div className="padding-large">{comment.body}</div>
          </div>
        ))}
        <AddComment postId={postId} />
      </div>
    )
  }
}

Comment.propTypes = {
  dispatch: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  comments: state.comments.items || []
})

export default connect(mapStateToProps)(Comment)
