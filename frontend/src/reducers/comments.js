import { ADD_COMMENT, GET_COMMENTS } from '../actions/comments'

export const comments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          id: Math.random(),
          parentId: action.postId,
          timestamp: Date.now(),
          body: action.text,
          author: action.author
        }
      ]
    case GET_COMMENTS:
      return Object.assign({}, state, {
        items: action.comments
      })
    default:
      return state
  }
}
