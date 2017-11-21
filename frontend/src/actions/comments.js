import * as api from '../utils/api'

export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_COMMENTS = 'GET_COMMENTS'

const addComment = (id, timestamp,  body, author, parentId) => {
  return {
    type: ADD_COMMENT,
    id,
    timestamp,
    body,
    author,
    parentId,
  }
}

const getComments = comments => {
  return {
    type: GET_COMMENTS,
    comments: comments
  }
}

export const fetchCommentsByPost = postId => {
  return dispatch => {
    return api
      .getCommentsByPost(postId)
      .then(comments => dispatch(getComments(comments)))
  }
}

export const fetchAddComment = (body, author, parentId) => {
  return dispatch => {
    return api
      .addCommentPost(body, author, parentId)
      .then(data => dispatch(addComment(data.id, data.timestamp, body, author, parentId)))
  }
}
