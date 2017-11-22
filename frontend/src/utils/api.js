import fetch from 'isomorphic-fetch'
import sortBy from 'sort-by'

const URL_API = 'http://localhost:3001'

let token = localStorage.token
if (!token) {
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8)
}

const headers = {
  'Accept': 'application/json',
  Authorization: token,
  'Content-Type': 'application/json',
}

export const getAllPosts = () =>
  fetch(`${URL_API}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.sort(sortBy('-timestamp')))

export const getPopularPosts = qty =>
  fetch(`${URL_API}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.sort(sortBy('-voteScore')).slice(0, qty ? qty : 5))

export const getPostById = postId =>
  fetch(`${URL_API}/posts/${postId}`, { headers }).then(res => res.json())

export const getCommentsByPost = postId =>
  fetch(`${URL_API}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data.sort(sortBy('-timestamp')))

export const getPostsByCategory = category =>
  fetch(`${URL_API}/${category}/posts`, { headers }).then(res => res.json())

export const getAllCategories = () =>
  fetch(`${URL_API}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const addCommentPost = (body, author, parentId) => {
  let payload = {
    id: Math.random(),
    timestamp: Date.now(),
    body,
    author,
    parentId,
  }
  return fetch(`${URL_API}/comments`, {
    headers,
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(res => res.json())
}

export const addPost = (title, body, author, category) => {
  let payload = {
    id: Math.random(),
    timestamp: Date.now(),
    title,
    body,
    author,
    category,
  }
  return fetch(`${URL_API}/posts`, {
    headers,
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(res => res.json())
}
