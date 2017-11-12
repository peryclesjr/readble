export const ADD_COMMENT = 'ADD_COMMENT'
export const VIEW_ALL_POSTS = 'VIEW_ALL_POSTS'

export const addComment = (text, postId, author)  => {
  return {
    type: ADD_COMMENT,
    text,
    postId,
    author,
  }
}

export const viewAllPosts = () => {
  console.log('CHAMOU O VIEW POSTS')
  return {
    type: VIEW_ALL_POSTS,
  }
}