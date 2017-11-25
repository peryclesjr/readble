import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Comment from '../../components/Comment'
import NotFound from '../../components/NotFound'
import Authorship from '../../components/Authorship'
import { fetchCommentsByPost } from '../../actions/comments'
import {
  fetchPost,
  fetchVotePost,
  fetchDeletePost,
  fetchPopularPosts,
  updatePost
} from '../../actions/posts'
import {
  FaTag,
  FaThumbsUp,
  FaThumbsDown,
  FaComment,
  FaEdit,
  FaTrash
} from 'react-icons/lib/fa'

class Post extends React.Component {

  constructor() {
    super()
    this.state = {
      fireRedirect: false,
      fireRedirectToUpdate: false
    }
  }

  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(fetchPost(match.params.id))
    dispatch(fetchCommentsByPost(match.params.id))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const { dispatch, match } = nextProps
      dispatch(fetchPost(match.params.id))
      dispatch(fetchCommentsByPost(match.params.id))
    }
  }

  upVote() {
    const { dispatch, post } = this.props
    dispatch(fetchVotePost('upVote', post.id))
    dispatch(fetchPopularPosts())
  }

  downVote() {
    const { dispatch, post } = this.props
    dispatch(fetchVotePost('downVote', post.id))
    dispatch(fetchPopularPosts())
  }

  update() {
    const { dispatch, post } = this.props
    dispatch(updatePost(post))
    this.setState({ fireRedirectToUpdate: true })
  }

  delete() {
    const { dispatch, post } = this.props
    dispatch(fetchDeletePost(post.id))
    this.setState({ fireRedirect: true })
  }

  render() {
    const { fireRedirect, fireRedirectToUpdate } = this.state
    const { post } = this.props
    return (
      <div className="container">
        {post.title ? (
          <div>
            <div className="card-4 white">
              <div className="container">
                <div className="row">
                  <div className="col l10 m10 s10">
                    <h3>
                      <b>{post.title}</b>
                    </h3>
                  </div>
                  <div className="col l2 m2 s2">
                    <span className="tag light-gray small right">
                      <FaTag /> {post.category}
                    </span>
                  </div>
                </div>
                <Authorship author={post.author} timestamp={post.timestamp} />
                <div className="container">
                  <p>{post.body}</p>
                </div>
                <div className="row margin">
                  <div className="">
                    <div className="col l3 m3 s6 center">
                      <FaComment size={25} />{' '}
                      <span className="badge">{post.commentCount}</span>
                    </div>
                    <div className="col l3 m3 s6 center">
                      <span className="badge">{post.voteScore}</span>
                      <button
                        className="icon"
                        onClick={e => {
                          e.preventDefault()
                          this.upVote()
                        }}>
                        <FaThumbsUp size={25} />
                      </button>
                      <button
                        className="icon"
                        onClick={e => {
                          e.preventDefault()
                          this.downVote()
                        }}>
                        <FaThumbsDown size={25} />
                      </button>
                    </div>
                    <div className="col l3 m3 s6 center">
                      <button
                        className="icon"
                        onClick={e => {
                          e.preventDefault()
                          this.update()
                        }}>
                          <FaEdit size={25} />
                      </button>
                    </div>
                    <div className="col l3 m3 s6 center">
                      <button
                        className="icon"
                        onClick={e => {
                          e.preventDefault()
                          this.delete()
                        }}>
                        <FaTrash size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="margin-top margin-bottom">
                <Comment />
              </div>
            </div>
          </div>
        ) : (
          <NotFound />
        )}
        { fireRedirect && <Redirect to="/" /> }
        { fireRedirectToUpdate && <Redirect to={`/posts/${post.id}`} /> }
      </div>
    )
  }
}

Post.propTypes = {
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

const mapStateToProps = state => ({
  post: state.postDetailed.item || {}
})

export default connect(mapStateToProps)(Post)
