import * as api from '../utils/api'

import {
  GET_ALL_POSTS,
  GET_POPULAR_POSTS,
  GET_POSTS_BY_CATEGORY,
  GET_POST,
  GET_POST_VOTES,
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST,
  PREPARE_POST_FORM,
  GET_QTY_COMMENTS
} from './ActionTypes'

export const getAllPosts = posts => {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

export const getPopularPosts = posts => {
  return {
    type: GET_POPULAR_POSTS,
    posts
  }
}

export const getPostsByCategory = posts => {
  return {
    type: GET_POSTS_BY_CATEGORY,
    posts
  }
}

export const getPost = post => {
  return {
    type: GET_POST,
    post
  }
}

export const getVotes = (vote, postId) => {
  return {
    type: GET_POST_VOTES,
    vote,
    postId
  }
}

export const removePostFromList = postId => {
  return {
    type: REMOVE_POST,
    postId
  }
}

export const addPost = post => {
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

export const updatePost = post => {
  return {
    type: UPDATE_POST,
    post
  }
}

export const preparePostForm = post => {
  return {
    type: PREPARE_POST_FORM,
    post
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

export const fetchUpdatePost = (title, body, id) => {
  return dispatch => {
    return api
      .updatePost(title, body, id)
      .then(data => dispatch(updatePost(data)))
  }
}

export const fetchVote = (vote, postId) => {
  return dispatch => {
    return api
      .votePost(vote, postId)
      .then(data => dispatch(getVotes(vote, postId)))
  }
}

export const fetchDeletePost = postId => {
  return dispatch => {
    return api
      .deletePost(postId)
      .then(data => dispatch(removePostFromList(postId)))
  }
}
