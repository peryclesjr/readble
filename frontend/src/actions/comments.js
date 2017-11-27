import * as api from '../utils/api'
import { getQtyComments } from './posts'

import {
  ADD_COMMENT,
  GET_COMMENTS,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  GET_COMMENT_VOTES
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

export const getComments = comments => {
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

export const updateComment = comment => {
  return {
    type: UPDATE_COMMENT,
    comment
  }
}

const getVotes = (vote, id) => {
  return {
    type: GET_COMMENT_VOTES,
    vote,
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

export const fetchUpdateComment = (body, id) => {
  return dispatch => {
    return api
      .updateComment(body, id)
      .then(data => dispatch(updateComment(data)))
  }
}

export const fetchVote = (vote, id) => {
  return dispatch => {
    return api.voteComment(vote, id).then(data => dispatch(getVotes(vote, id)))
  }
}