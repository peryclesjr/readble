import { ADD_COMMENT } from '../actions/posts'

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
    default:
      return state
  }
}

export default comments
