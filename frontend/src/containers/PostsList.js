import { connect } from 'react-redux'
import Posts from '../components/Posts'
import * as api from '../utils/api'

const mapStateToProps = (state, props) => ({
  posts: state.posts
});

const PostsList = connect(mapStateToProps)(Posts)

export default PostsList