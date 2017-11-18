import React from 'react'
import { Link } from 'react-router-dom'
import FaHeart from 'react-icons/lib/fa/heart'

const PopularPosts = ({ posts }) => (
  <div className="card margin">
    <div className="container padding">
      <h4><FaHeart /> Popular Posts</h4>
    </div>
    <ul className="ul hoverable white">
      {posts.map(post => (
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

export default PopularPosts
