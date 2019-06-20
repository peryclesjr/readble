import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { preparePostForm } from '../actions/posts'
import PropTypes from 'prop-types'

const AddPostButton = React.memo(function AddPostButton({dispatch}) {
  return <div className="container">
      <Link to="/add-post" className="addPost orange" onClick={() => dispatch(preparePostForm())}>
        <b>Add a Post</b>
      </Link>
    </div>
})

AddPostButton.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(AddPostButton)
