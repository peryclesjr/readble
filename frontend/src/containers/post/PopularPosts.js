import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPopularPosts } from '../../actions/posts'
import FaHeart from 'react-icons/lib/fa/heart'

class PopularPosts extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPopularPosts())
  }
  render() {
    const { popPosts } = this.props
    return (
      <div className="card margin">
        <div className="container padding">
          <h4>
            <FaHeart /> Popular Posts
          </h4>
        </div>
        <ul className="ul hoverable white">
          {popPosts.map(post => (
            <li key={post.id} className="padding-16">
              <Link to={`/post/${post.id}`}>
                <span className="large">{post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  popPosts: state.popularPosts.items || []
})

export default connect(mapStateToProps)(PopularPosts)
