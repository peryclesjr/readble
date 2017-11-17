import * as api from '../utils/api'

export const ADD_COMMENT = 'ADD_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export const addComment = (text, author, postId) => {
  return {
    type: ADD_COMMENT,
    text,
    postId,
    author
  }
}

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    posts: comments
  }
}

export const fetchComments = () => {
  return dispatch => {
    return api.getCommentsByPost().then(comments => dispatch(receiveComments(comments)))
  }
}