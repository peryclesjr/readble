import * as api from '../utils/api'
import { getQtyComments } from './posts'

import {
  ADD_COMMENT,
  GET_COMMENTS,
  REMOVE_COMMENT
} from './actionType'

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