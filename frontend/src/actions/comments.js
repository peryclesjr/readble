import * as api from '../utils/api'
import { getQtyComments } from './posts'

export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_COMMENTS = 'GET_COMMENTS'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

const addComment = comment => {
  return {
    type: ADD_COMMENT,
    id: comment.id,
    timestamp: comment.timestamp,
    body: comment.body,
    author: comment.author,
    parentId: comment.parentId
  }
}

const getComments = comments => {
  return {
    type: GET_COMMENTS,
    comments
  }
}

export const removeComment = id => {
  return {
    type: REMOVE_COMMENT,
    id
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
      .then(data => dispatch(addComment(data)))
      .then(qty => dispatch(getQtyComments(parentId)))
  }
}

export const fetchDeleteComment = (commentId) => {
  return dispatch => {
    return api.deleteComment(commentId)
  }
}