import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FaHeart from 'react-icons/lib/fa/heart'

const PopularPosts = ({ popPosts }) => (
  <div className="card margin">
    <div className="container padding">
      <h4><FaHeart /> Popular Posts</h4>
    </div>
    <ul className="ul hoverable white">
      {popPosts.map(post => (
        <li key={post.id} className="padding-16">
          <Link
            to={`/post/${post.id}`}>
            <span className="large">{post.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const mapStateToProps = state => ({
  popPosts: state.popularPosts.items || [],
})

export default connect(mapStateToProps)(PopularPosts)
