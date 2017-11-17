import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPost } from '../actions/posts'
import like from '../images/like.png'
import dislike from '../images/dislike.png'
import Comment from '../containers/Comment'
import NotFound from '../components/NotFound'
import Authorship from '../components/Authorship'

class Post extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(fetchPost(match.params.id))
  }
  render() {
    const { post, match } = this.props
    return (
      <div className="container">
        {post.title ? (
          <div>
            <h3><b>{post.title}</b></h3>
            <Authorship author={post.author} timestamp={post.timestamp} />
            <p>{post.body}</p>
            <div className="row">
              <div className="col l12">
                <span className="padding right">
                  <b>Comments</b>{' '}
                  <span className="badge">{post.commentCount}</span>
                </span>
                <span className="padding left">
                  <span className="badge">{post.voteScore}</span>{' '}
                  <img src={like} alt="Like" style={{ width: '8%' }} />{' '}
                  <img src={dislike} alt="Dislike" style={{ width: '8%' }} />
                </span>
              </div>
            </div>
            <div className="row">
              <Comment postId={match.params.id} />
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
