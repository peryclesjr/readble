import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Authorship from '../../components/Authorship'
import { fetchCommentsByPost, fetchDeleteComment, removeComment, fetchVote } from '../../actions/comments'
import { FaThumbsUp, FaEdit, FaTrash } from 'react-icons/lib/fa'

class Comment extends React.Component {
  vote(vote, id, postId) {
    const { dispatch } = this.props
    dispatch(fetchVote(vote, id))
    dispatch(fetchCommentsByPost(postId))
  }

  update() {

  }

  delete(id, parentId) {
    const { dispatch } = this.props
    dispatch(fetchDeleteComment(id))
    dispatch(removeComment(id))
  }

  render() {
    const { comments } = this.props
    return (
      <div className="col l12">
        {comments.map(comment => (
          <div key={comment.id}>
            <div className="col l8 m8 s6">
              <Authorship
                author={comment.author}
                timestamp={comment.timestamp}
              />
            </div>
            <div className="col l4 m4 s6">
              <div className="small right">
                <span className="badge">{comment.voteScore}</span>
                <button
                  className="icon"
                  onClick={e => {
                    e.preventDefault()
                    this.vote('upVote', comment.id, comment.parentId)
                  }}>
                  <FaThumbsUp size={18} />
                </button>

                <button
                  className="icon"
                  onClick={e => {
                    e.preventDefault()
                    this.update()
                  }}>
                  <FaEdit size={18} />
                </button>

                <button
                  className="icon"
                  onClick={e => {
                    e.preventDefault()
                    this.delete(comment.id, comment.parentId)
                  }}>
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
            <div className="col l12">
              <div className="margin">{comment.body}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

Comment.propTypes = {
  dispatch: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  comments: state.comments.items || []
})

export default connect(mapStateToProps)(Comment)
