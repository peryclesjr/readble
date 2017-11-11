import React from 'react'
import sortBy from 'sort-by'

const POPULAR_POSTS_NUMBER = 5

const PopularPosts = ({ posts }) => (
  <div className="card margin">
    <div className="container padding">
      <h4>Popular Posts</h4>
    </div>
    <ul className="ul hoverable white">
      {posts
        .sort(sortBy('-voteScore', 'title'))
        .slice(0, POPULAR_POSTS_NUMBER)
        .map(p => (
          <li key={p.id} className="padding-16">
            <span className="large">{p.title}</span>
          </li>
        ))}
    </ul>
  </div>
)

export default PopularPosts
