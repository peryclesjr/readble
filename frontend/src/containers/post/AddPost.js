import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchAddPost } from '../../actions/posts'

const AddPost = ({ dispatch }) => {
  let title, body, author, category
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!body.value.trim()) {
            return
          }
          dispatch(
            fetchAddPost("Primeiro Post", body.value, author.value, "roadtrip")
          )
          //title.value = ''
          body.value = ''
          author.value = ''
        }}>
        <div className="row">
          <div className="col l12 m12 s12">
            <input
              className="input"
              placeholder="Anonymous"
              ref={node => {
                author = node
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col l12 m12 s12">
            <textarea
              className="margin-top"
              placeholder="Post"
              rows="9"
              ref={node => {
                body = node
              }}
            />
          </div>
        </div>
        <button className="button margin-top border right" type="submit">
          Add Post
        </button>
      </form>
    </div>
  )
}

AddPost.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(AddPost)
