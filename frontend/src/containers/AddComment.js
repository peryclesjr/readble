import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/comments'

let AddComment = ({ dispatch, postId }) => {
  let text, author
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!text.value.trim()) {
            return
          }
          dispatch(addComment(text.value, author.value, postId))
          text.value = ''
          author.value = ''
        }}>
        <div className="row">
          <div className="col l12">
            <input
              placeholder="Anonymous"
              ref={node => { author = node }}
            />
            <div className="row margin-top-bottom">
              <div className="col l12">
                <textarea
                  placeholder="Comment"
                  rows="4" cols="50"
                  ref={node => { text = node }}
                />
              </div>
            </div>
            <button className="button margin-bottom border" type="submit">Add Comment</button>
          </div>
        </div>
      </form>
    </div>
  )
}

AddComment = connect()(AddComment)

export default AddComment
