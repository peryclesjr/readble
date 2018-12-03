import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { fetchCommentsByPost } from '../../actions/comments'
import { fetchPost } from '../../actions/posts'
import NotFound from '../../components/NotFound'
import PostDetail from './PostDetail'


class PostWrapper extends React.Component {
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
        {post.id
          ? <PostDetail post={post} />
          : <NotFound />
        }
      </div>
    )
  }
}

PostWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
    timestamp: PropTypes.number,
    body: PropTypes.string,
    commentCount: PropTypes.number,
    voteScore: PropTypes.number
  })
}

const mapStateToProps = state => ({
  post: state.postDetailed.item
})

export default connect(mapStateToProps)(PostWrapper)
