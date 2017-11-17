import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPost } from '../actions/posts'
import * as utils from '../utils/helpers'
import like from '../images/like.png'
import dislike from '../images/dislike.png'
import AddComment from '../containers/AddComment'

class Post extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(fetchPost(match.params.id))
  }
  render() {
    const { post } = this.props
    return (
      <div className="container">
        <h3>
          <b>{post.title}</b>
        </h3>
        <h5>
          {post.author}{' '}
          <span className="opacity">{utils.formattedDate(post.timestamp)}</span>
        </h5>
        <p>{post.body}</p>
        <div className="row">
          <div className="col l12">
            <span className="padding right">
              <b>Comments</b> <span className="badge">{post.commentCount}</span>
            </span>
            <span className="padding left">
              <span className="badge">{post.voteScore}</span>{' '}
              <img src={like} alt="Like" style={{ width: '10%' }} />{' '}
              <img src={dislike} alt="Dislike" style={{ width: '10%' }} />
            </span>
          </div>
        </div>
        <div className="row">
          <AddComment postId={post.id} />
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  dispatch: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post: state.posts.item || 'indefinido'
})

export default connect(mapStateToProps)(Post)
