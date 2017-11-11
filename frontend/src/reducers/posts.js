import { VIEW_ALL_POSTS } from '../actions'

const posts = (state = [], action) => {
  console.log('ENTORU NA ACTION DE POSTS: ', action)
  switch (action.type) {
    case VIEW_ALL_POSTS:
      console.log('Action: VIEW ALL POSTS: ', action)
      return [
        ...state,
        {
          timestamp: action.timestamp,
          title: action.title,
          body: action.text,
          author: action.author,
          commentCount: action.commentCount,
          voteScore: action.voteScore,
        }
      ]
    default:
      return state
  }
}

export default posts
