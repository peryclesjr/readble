import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Authorship from '../../components/Authorship'

class Comment extends React.Component {
  render() {
    const { comments } = this.props
    return (
      <div className="col l12">
        {comments.map(comment => (
          <div key={comment.id}>
            <Authorship author={comment.author} timestamp={comment.timestamp} />
            <div className="margin">{comment.body}</div>
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
