import React from 'react'
import sortBy from 'sort-by'

const POPULAR_NUMBER = 5

const PopularPosts = ({ posts }) => (
  <ul className="ul hoverable white">
    {posts.sort(sortBy('-commentCount', 'title'))
      .slice(0,POPULAR_NUMBER)
        .map(p => (
          <li key={p.id} className="padding-16">
            <span className="large">{p.title}</span>
          </li>
        ))}
  </ul>
)

export default PopularPosts
