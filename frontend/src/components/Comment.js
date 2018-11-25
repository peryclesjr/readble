import React from 'react'
import AddComment from '../containers/comment/CommentForm'
import GetComments from '../containers/comment/Comments'

const Comment = () => (
  <div>
    <GetComments />
    <AddComment />
  </div>
)

export default Comment
