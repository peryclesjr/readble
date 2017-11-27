import sortBy from 'sort-by'
import {
  ADD_COMMENT,
  GET_COMMENTS,
  REMOVE_COMMENT,
  GET_COMMENT_VOTES
} from '../actions/actionType'

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
    case GET_COMMENT_VOTES:
      return {
        ...state,
        items: state.items.map(c => {
          if (c.id === action.id) {
            return {
              ...c,
              voteScore:
                action.vote === 'upVote' ? c.voteScore + 1 : c.voteScore - 1
            }
          }
          return c
        })
      }
    default:
      return state
  }
}
