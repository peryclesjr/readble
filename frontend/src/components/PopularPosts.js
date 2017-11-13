import React from 'react'

const PopularPosts = ({ posts }) => (
  <div className="card margin">
    <div className="container padding">
      <h4>Popular Posts</h4>
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
