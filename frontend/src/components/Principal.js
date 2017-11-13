import React from 'react'
import { connect } from 'react-redux';
import About from './About'
import Posts from './Posts'
import PopularPosts from './PopularPosts'
import Category from './Category'
//import sortBy from 'sort-by'
import { fetchPosts } from '../actions'

class Principal extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPosts())
  }
  render() {
    const { posts } = this.props
    return (
      <div className="row">
        <div className="col l8 s12">
          <Posts posts={posts} />
        </div>
        <div className="col l4">
          <About />
          <PopularPosts /*posts={posts.sort(sortBy('-voteScore')).slice(0,5)}*/ />
          <Category /*categories={categories}*/ />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Principal)
