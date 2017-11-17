import React from 'react'
import FaHeart from 'react-icons/lib/fa/heart'

const PopularPosts = ({ posts }) => (
  <div className="card margin">
    <div className="container padding">
      <h4><FaHeart /> Popular Posts</h4>
    </div>
    <ul className="ul hoverable white">
      {posts.map(p => (
        <li key={p.id} className="padding-16">
          <span className="large">{p.title}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default PopularPosts
