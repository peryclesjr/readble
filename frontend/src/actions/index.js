import * as api from '../utils/api'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_COMMENT = 'ADD_COMMENT'

export const addComment = (text, postId, author)  => {
  return {
    type: ADD_COMMENT,
    text,
    postId,
    author,
  }
}

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (json) => {
  return {
    type: RECEIVE_POSTS,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const fetchPosts = () => {
  return dispatch => {
    dispatch(requestPosts())
    return api.getAllPosts()
      .then(json => dispatch(receivePosts(json)))
  }
}