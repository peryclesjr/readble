import React from 'react'

const Category = ({ categories }) => (
  <div className="card margin">
    <div className="container padding">
      <h4>Category</h4>
    </div>
    <div className="container white">
      <p>
        {categories.map(c => (
          <span key={c.path} className="tag light-grey small margin-bottom">
            {c.name}
          </span>
        ))}
      </p>
    </div>
  </div>
)

export default Category
