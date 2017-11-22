import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Comment from '../../components/Comment'
import NotFound from '../../components/NotFound'
import Authorship from '../../components/Authorship'
import { fetchPost } from '../../actions/posts'
import { fetchCommentsByPost } from '../../actions/comments'
import { FaTag, FaThumbsUp, FaThumbsDown, FaComment } from 'react-icons/lib/fa'

class Post extends React.Component {
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
  render() {
    const { post } = this.props
    return (
      <div className="container">
        {post.title ? (
          <div>
            <div className='card-4 white'>
              <div className="container">
                <div className="row">
                  <div className="col l10 m10 s10">
                    <h3><b>{post.title}</b></h3>
                  </div>
                  <div className="col l2 m2 s2">
                    <span className="tag light-gray small right"><FaTag /> {post.category}</span>
                  </div>
                </div>
                <Authorship author={post.author} timestamp={post.timestamp} />
                <div className="container">
                  <p>{post.body}</p>
                </div>
                <div className="row">
                  <div className="col l12">
                    <span className="padding right">
                      <FaComment size={25} />{' '}
                      <span className="badge">{post.commentCount}</span>
                    </span>
                    <span className="padding left">
                      <span className="badge">{post.voteScore}</span>{' '}
                      <FaThumbsUp size={25} />{' '}
                      <FaThumbsDown size={25} />
                    </span>
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
      </div>
    )
  }
}

Post.propTypes = {
  dispatch: PropTypes.func.isRequired,
  post: PropTypes.any.isRequired /* review this type any */
}

const mapStateToProps = state => ({
  post: state.posts.item || 'indefinido', /* review this default value */
  comments: state.comments.items || []
})

export default connect(mapStateToProps)(Post)
