import * as api from '../utils/api'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST = 'GET_POST'

const getAllPosts = posts => {
  return {
    type: GET_ALL_POSTS,
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
    return api.getAllPosts().then(posts => dispatch(getAllPosts(posts)))
  }
}

export const fetchPost = (id) => {
  return dispatch => {
    return api.getPostById(id).then(post => dispatch(getPost(post)))
  }
}
