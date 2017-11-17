import * as api from '../utils/api'

export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_COMMENTS = 'GET_COMMENTS'

export const addComment = (text, author, postId) => {
  return {
    type: ADD_COMMENT,
    text,
    postId,
    author
  }
}

export const getComments = comments => {
  return {
    type: GET_COMMENTS,
    comments: comments
  }
}

export const fetchCommentsByPost = (postId) => {
  return dispatch => {
    return api.getCommentsByPost(postId).then(comments => dispatch(getComments(comments)))
  }
}
