import { connect } from 'react-redux'
import Posts from '../components/Posts'
import {viewAllPosts} from '../actions'

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = dispatch => ({
  listPosts: () => { dispatch(viewAllPosts()) }
})

const PostsList = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsList