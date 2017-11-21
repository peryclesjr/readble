import { ADD_COMMENT, GET_COMMENTS } from '../actions/comments'

export const comments = (state = { items: [] }, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      const newItems = state.items.slice()
      newItems.unshift({
        id: action.id,
        parentId: action.parentId,
        timestamp: action.timestamp,
        body: action.body,
        author: action.author
      })
      return {
        ...state,
        items: newItems
      }
    case GET_COMMENTS:
      return Object.assign({}, state, {
        items: action.comments
      })
    default:
      return state
  }
}
