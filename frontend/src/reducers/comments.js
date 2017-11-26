import {
  ADD_COMMENT,
  GET_COMMENTS,
  REMOVE_COMMENT
} from '../actions/actionType'
import sortBy from 'sort-by'

export const comments = (state = { items: [] }, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      const newItems = state.items.slice()
      newItems.push({
        id: action.id,
        parentId: action.parentId,
        timestamp: action.timestamp,
        body: action.body,
        author: action.author,
        voteScore: 1
      })
      return {
        ...state,
        items: newItems.sort(sortBy('-voteScore'))
      }
    case GET_COMMENTS:
      return Object.assign({}, state, {
        items: action.comments.sort(sortBy('-voteScore'))
      })
    case REMOVE_COMMENT:
      return {
        ...state,
        items: state.items.filter(c => c.id !== action.id)
      }
    default:
      return state
  }
}
