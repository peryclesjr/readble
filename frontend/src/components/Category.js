import React from 'react'

const Category = ({ categories }) => (
  <div className="container white">
    {console.log('Categorias: ', categories)}
    {!categories.error || categories.map(c =>
      <p><span className="tag light-grey small margin-bottom">{c.name}</span></p>
    )}
  </div>
)

export default Category
