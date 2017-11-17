import { ADD_COMMENT, GET_COMMENTS } from '../actions/comments'

const comments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          id: Math.random()
            .toString(36)
            .substr(-8),
          parentId: action.postId,
          timestamp: Date.now(),
          body: action.text,
          author: action.author,
          voteScore: 0,
          deleted: false,
          parentDeleted: false
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

export default comments
