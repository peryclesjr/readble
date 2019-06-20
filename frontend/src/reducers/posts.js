import sortBy from 'sort-by'
import {
    ADD_POST,
    GET_ALL_POSTS,
    GET_POST,
    GET_POST_VOTES,
    GET_POSTS_BY_CATEGORY,
    GET_QTY_COMMENTS,
    PREPARE_POST_FORM,
    REMOVE_POST,
    UPDATE_POST
} from '../actions/ActionTypes'

export const posts = (state = { items: [] }, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return Object.assign({}, state, {
        items: action.posts
      })
    case GET_POST_VOTES:
      return {
        ...state,
        items: state.items.map(post => {
          if (post.id === action.postId) {
            return {
              ...post,
              voteScore:
                action.vote === 'upVote'
                  ? post.voteScore + 1
                  : post.voteScore - 1
            }
          }
          return post
        })
      }
    case GET_QTY_COMMENTS:
      return {
        ...state,
        items: state.items.map(post => {
          if (post.id === action.parentId) {
            return {
              ...post,
              commentCount: post.commentCount + 1
            }
          }
          return post
        })
      }
    case GET_POSTS_BY_CATEGORY:
      return Object.assign({}, state, {
        items: action.posts
      })
    case ADD_POST:
      const newItems = state.items.slice()  // clone the actual state.newItens
      newItems.unshift({
        id: action.id,
        timestamp: action.timestamp,
        title: action.title,
        body: action.body,
        author: action.author,
        category: action.category
      })
      return {
        ...state,
        items: newItems.sort(sortBy('-timestamp'))
      }
    case REMOVE_POST:
      return {
        ...state,
        items: state.items.filter(post => post.id !== action.postId)
      }
    default:
      return state
  }
}

export const postDetailed = (state = { item: {} }, action) => {
  switch (action.type) {
    case GET_POST:
      return Object.assign({}, state, {
        item: action.post
      })
    case GET_POST_VOTES:
      return {
        ...state,
        item: {
          ...state.item,
          voteScore:
            action.vote === 'upVote'
              ? state.item.voteScore + 1
              : state.item.voteScore - 1
        }
      }
    case GET_QTY_COMMENTS:
      return {
        ...state,
        item: {
          ...state.item,
          commentCount: action.isAdd ? ++state.item.commentCount : --state.item.commentCount
        }
      }
    default:
      return state
  }
}


export const updatePost = (state = { item: {} }, action) => {
  switch (action.type) {
    case UPDATE_POST:
      return Object.assign({}, state, {
        item: action.post
      })
    default:
      return state
  }
}

export const preparePostForm = (state = { item: {} }, action) => {
  switch (action.type) {
    case PREPARE_POST_FORM:
      return Object.assign({}, state, {
        item: action.post
      })
    default:
      return state
  }
}
