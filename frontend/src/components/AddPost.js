import React from 'react'
import { Link } from 'react-router-dom'

const AddPost = () => (
  <div className="container">
    <Link to='/addPost' className="addPost">
      <b>Add a Post</b>
    </Link>
  </div>
)

export default AddPost