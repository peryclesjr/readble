import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const AddPost = ({ dispatch }) => {
  let title, body, author, category
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!body.value.trim() || !title.value.trim()) {
            return
          }
          dispatch(
            fetchAddPost(title.value, body.value, author.value, category.value)
          )
          title.value = ''
          body.value = ''
          author.value = ''
        }}>
        <div className="row">
          <div className="col l12 m12 s12">
            <input
              className="input"
              placeholder="Title"
              ref={node => {
                title = node
              }}
            />
          </div>
          <div className="row margin-top-bottom">
            <div className="col l12 m12 s12">
              <textarea
                rows="2"
                placeholder="Comment"
                ref={node => {
                  body = node
                }}
              />
            </div>
          </div>
          <button className="button margin-bottom border" type="submit">
            Add Comment
          </button>
        </div>
      </form>
    </div>
  )
}

AddComment.propTypes = {
  dispatch: PropTypes.func.isRequired,
  post: PropTypes.any.isRequired /* review this type any */
}

const mapStateToProps = state => ({
  post: state.posts.item || '' /* review this default value */
})

export default connect(mapStateToProps)(AddComment)
