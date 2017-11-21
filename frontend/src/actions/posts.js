import * as api from '../utils/api'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST = 'GET_POST'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'
export const GET_POPULAR_POSTS = 'GET_POPULAR_POSTS'
export const ADD_POST = 'ADD_POST'

const getAllPosts = posts => {
  return {
    type: GET_ALL_POSTS,
    posts: posts
  }
}

const getPopularPosts = posts => {
  return {
    type: GET_POPULAR_POSTS,
    posts: posts
  }
}

const getPostsByCategory = posts => {
  return {
    type: GET_POSTS_BY_CATEGORY,
    posts: posts
  }
}

const getPost = post => {
  return {
    type: GET_POST,
    post: post
  }
}

const addPost = (post) => {
  return {
    type: ADD_POST
  }
}

export const fetchPost = id => {
  return dispatch => {
    return api.getPostById(id).then(post => dispatch(getPost(post)))
  }
}

export const fetchPosts = () => {
  return dispatch => {
    return api.getAllPosts().then(posts => dispatch(getAllPosts(posts)))
  }
}

export const fetchPopularPosts = qty => {
  return dispatch => {
    return api
      .getPopularPosts(qty)
      .then(posts => dispatch(getPopularPosts(posts)))
  }
}

export const fetchPostsByCategory = categoryPath => {
  return dispatch => {
    return api
      .getPostsByCategory(categoryPath)
      .then(posts => dispatch(getPostsByCategory(posts)))
  }
}
