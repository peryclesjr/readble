import * as api from '../utils/api'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST = 'GET_POST'
export const GET_POST_VOTES = 'GET_POST_VOTES'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'
export const GET_POPULAR_POSTS = 'GET_POPULAR_POSTS'
export const ADD_POST = 'ADD_POST'
export const GET_QTY_COMMENTS = 'GET_QTY_COMMENTS'

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

const getVotes = (vote, postId) => {
  return {
    type: GET_POST_VOTES,
    vote,
    postId
  }
}

const addPost = post => {
  return {
    type: ADD_POST,
    id: post.id,
    timestamp: post.timestamp,
    title: post.title,
    body: post.body,
    author: post.author,
    category: post.category
  }
}

export const getQtyComments = parentId => {
  return {
    type: GET_QTY_COMMENTS,
    parentId
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

export const fetchAddPost = (title, body, author, category) => {
  return dispatch => {
    return api
      .addPost(title, body, author, category)
      .then(data => dispatch(addPost(data)))
  }
}

export const fetchVotePost = (vote, postId) => {
  return dispatch => {
    return api.vote(vote, postId).then(data => dispatch(getVotes(vote, postId)))
  }
}
