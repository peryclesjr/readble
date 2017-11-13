import * as api from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_COMMENT = 'ADD_COMMENT'

export const addComment = (text, postId, author) => {
  return {
    type: ADD_COMMENT,
    text,
    postId,
    author
  }
}

export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts: posts
  }
}

export const fetchPosts = () => {
  return dispatch => {
    return api.getAllPosts().then(posts => dispatch(receivePosts(posts)))
  }
}
