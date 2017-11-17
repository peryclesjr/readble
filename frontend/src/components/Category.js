import React from 'react'
import FaTags from 'react-icons/lib/fa/tags'

const Category = ({ categories }) => (
  <div className="card margin">
    <div className="container padding">
      <h4><FaTags /> Category</h4>
    </div>
    <div className="container white">
      <p>
        {categories.map(c => (
          <span key={c.path} className="tag light-gray small margin">
            {c.name}
          </span>
        ))}
      </p>
    </div>
  </div>
)

export default Category
