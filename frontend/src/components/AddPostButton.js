import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { preparePostForm } from '../actions/posts'
import PropTypes from 'prop-types'

const AddPostButton = ({ dispatch }) => (
  <div className="container">
    <Link
      className="addPost"
      onClick={() => dispatch(preparePostForm())}
      to="/posts"
    >
      <b>Add a Post</b>
    </Link>
  </div>
)

 AddPostButton.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(AddPostButton)
