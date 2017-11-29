import React from 'react'
import { connect } from 'react-redux'
import { preparePostForm } from '../actions/posts'

const AddPostButton = ({ dispatch }) => (
  <div className="container">
    <a
      className="addPost"
      onClick={e => dispatch(preparePostForm())}
      href="/posts"
    >
      <b>Add a Post</b>
    </a>
  </div>
)

export default connect()(AddPostButton)
