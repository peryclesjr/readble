import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddPost from '../components/AddPost'
import Posts from '../components/Posts'
import About from '../components/About'
import PopularPosts from '../components/PopularPosts'
import Category from '../components/Category'
import sortBy from 'sort-by'
import { fetchPosts } from '../actions/posts'
import { fetchCategories } from '../actions/categories'

class Principal extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPosts())
    dispatch(fetchCategories())
  }
  render() {
    const { posts, categories } = this.props
    return (
      <div className="row">
        <div className="col l8 s12">
          <Posts posts={posts} />
        </div>
        <div className="col l4">
          <AddPost />
          <About />
          <PopularPosts posts={posts.sort(sortBy('-voteScore')).slice(0, 5)} />
          <Category categories={categories} />
        </div>
      </div>
    )
  }
}

Principal.propTypes = {
  posts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items || [],
  categories: state.categories.data || []
})

export default connect(mapStateToProps)(Principal)
