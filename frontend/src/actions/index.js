export const ADD_COMMENT = 'ADD_COMMENT'

export const addComment = (text, postId, author)  => {
  return {
    type: ADD_COMMENT,
    text,
    postId,
    author,
  }
}
