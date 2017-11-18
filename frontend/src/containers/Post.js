import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPost } from '../actions/posts'
import Comment from '../containers/Comment'
import NotFound from '../components/NotFound'
import Authorship from '../components/Authorship'
import FaTag from 'react-icons/lib/fa/tag'
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'
import FaComment from 'react-icons/lib/fa/comment'

class Post extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(fetchPost(match.params.id))
  }
  render() {
    const { post, match } = this.props
    return (
      <div>
        {post.title ? (
          <div>
            <div className='card-4 margin white'>
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
              <div className="container">
                <Comment postId={match.params.id} />
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
  post: state.posts.item || 'indefinido' /* review this default value */
})

export default connect(mapStateToProps)(Post)
