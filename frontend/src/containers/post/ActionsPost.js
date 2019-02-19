import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  fetchVote,
  fetchDeletePost,
  fetchPopularPosts,
  preparePostForm
} from '../../actions/posts'
import {
  FaComment,
  FaThumbsUp,
  FaThumbsDown,
  FaEdit,
  FaTrash
} from 'react-icons/fa'

class ActionsPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fireRedirect: false,
      fireRedirectToUpdate: false
    }
  }

  upVote() {
    const { dispatch, post } = this.props
    dispatch(fetchVote('upVote', post.id))
    dispatch(fetchPopularPosts())
  }

  downVote() {
    const { dispatch, post } = this.props
    dispatch(fetchVote('downVote', post.id))
    dispatch(fetchPopularPosts())
  }

  update() {
    const { dispatch, post } = this.props
    dispatch(preparePostForm(post))
    this.setState({ fireRedirectToUpdate: true })
  }

  delete() {
    const { dispatch, post } = this.props
    dispatch(fetchDeletePost(post.id))
    this.setState({ fireRedirect: true })
  }

  render() {
    const { fireRedirect, fireRedirectToUpdate } = this.state
    const { post, classname } = this.props

    return (
      <div>
        <div className={classname}>
          <FaComment size={25} />{' '}
          <span className="badge">{post.commentCount}</span>
        </div>

        <div className={classname}>
          <span className="badge">{post.voteScore}</span>
          <button
            className="icon"
            onClick={e => {
              e.preventDefault()
              this.upVote()
            }}
          >
            <FaThumbsUp size={25} />
          </button>

          <button
            className="icon"
            onClick={e => {
              e.preventDefault()
              this.downVote()
            }}
          >
            <FaThumbsDown size={25} />
          </button>
        </div>

        <div className={classname}>
          <button
            className="icon"
            onClick={e => {
              e.preventDefault()
              this.update()
            }}
          >
            <FaEdit size={25} />
          </button>
        </div>

        <div className={classname}>
          <button
            className="icon"
            onClick={e => {
              e.preventDefault()
              this.delete()
            }}
          >
            <FaTrash size={25} />
          </button>
        </div>

        {fireRedirect && <Redirect to="/" />}
        {fireRedirectToUpdate && <Redirect to={`/posts/${post.id}`} />}
      </div>
    )
  }
}

ActionsPost.propTypes = {
  dispatch: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
    timestamp: PropTypes.number,
    body: PropTypes.string,
    commentCount: PropTypes.number,
    voteScore: PropTypes.number
  }).isRequired
}

export default connect()(ActionsPost)
