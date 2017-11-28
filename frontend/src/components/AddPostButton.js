import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { preparePostForm } from '../actions/posts'

const AddPostButton = ({ dispatch }) => (
  <div className="container">
    <Link
      className="addPost"
      onClick={e => dispatch(preparePostForm())}
      to="/posts"
    >
      <b>Add a Post</b>
    </Link>
  </div>
)

export default connect()(AddPostButton)
