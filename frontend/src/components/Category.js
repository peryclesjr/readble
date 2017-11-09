import React from 'react'

const Category = ({ categories }) => (
  <div className="container white">
    <p>
      {categories.map(c => (
        <span key={c.path} className="tag light-grey small margin-bottom">
          {c.name}
        </span>
      ))}
    </p>
  </div>
)

export default Category
