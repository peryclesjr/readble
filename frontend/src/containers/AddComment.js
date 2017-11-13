import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/posts'

let AddComment = ({ dispatch }) => {
  let text, author, postId
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!text.value.trim()) {
            return
          }
          dispatch(addComment(text.value, postId.value, author.value))
          text.value = ''
          postId.value = ''
          author.value = ''
        }}>
        <input ref={node => { postId = node }} />
        <input ref={node => { author = node }} />
        <textarea rows="4" cols="50" ref={node => { text = node }} />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  )
}
AddComment = connect()(AddComment)

export default AddComment
