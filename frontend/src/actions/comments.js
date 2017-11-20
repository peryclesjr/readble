import * as api from '../utils/api'

export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_COMMENTS = 'GET_COMMENTS'

const addComment = (body, author, postId) => {
  return {
    type: ADD_COMMENT,
    body,
    postId,
    author
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

export const fetchAddComment = (body, author, postId) => {
  return dispatch => {
    return api
      .addCommentPost(body, author, postId)
      .then(data => dispatch(addComment(body, author, postId)))
  }
}
