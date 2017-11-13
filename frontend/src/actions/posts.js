import * as api from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const GET_POST = 'GET_POST'

const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts: posts
  }
}

const getPost = post => {
  return {
    type: GET_POST,
    post: post
  }
}

export const fetchPosts = () => {
  return dispatch => {
    return api.getAllPosts().then(posts => dispatch(receivePosts(posts)))
  }
}

export const fetchPost = (id) => {
  return dispatch => {
    return api.getPostById(id).then(post => dispatch(getPost(post)))
  }
}
