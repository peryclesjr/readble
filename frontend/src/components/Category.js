import React from 'react'
import FaTags from 'react-icons/lib/fa/tags'
import { Link } from 'react-router-dom'

const Category = ({ categories }) => (
  <div className="card margin">
    <div className="container padding">
      <h4><FaTags /> Categories</h4>
    </div>
    <div className="container white">
      <p>
        {categories.map(cat => (
          <Link key={cat.path} to={`/${cat.path}/posts`}>
            <span className="tag light-gray small margin">
              {cat.name}
            </span>
          </Link>
        ))}
      </p>
    </div>
  </div>
)

export default Category
