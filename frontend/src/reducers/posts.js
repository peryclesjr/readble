import sortBy from 'sort-by'
import {
  GET_ALL_POSTS,
  GET_POST,
  GET_POST_VOTES,
  GET_POSTS_BY_CATEGORY,
  GET_POPULAR_POSTS,
  ADD_POST,
  UPDATE_POST,
  GET_QTY_COMMENTS
} from '../actions/posts'

export const posts = (state = { items: [] }, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return Object.assign({}, state, {
        items: action.posts.sort(sortBy('-timestamp'))
      })
    case GET_POST_VOTES:
      return {
        ...state,
        items: state.items.map(post => {
          if (post.id === action.postId) {
            return {
              ...post,
              voteScore:
                action.vote === 'upVote' ? post.voteScore + 1 : post.voteScore - 1
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
      const newItems = state.items.slice()
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
          commentCount: state.item.commentCount + 1
        }
      }
    default:
      return state
  }
}

export const popularPosts = (state = { items: [] }, action) => {
  switch (action.type) {
    case GET_POPULAR_POSTS:
      return Object.assign({}, state, {
        items: action.posts.sort(sortBy('-voteScore')).slice(0, 5)
      })
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
