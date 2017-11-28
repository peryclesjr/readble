import * as actions from '../actions/posts'
import * as types from '../actions/ActionTypes'

describe('post actions', () => {
  it('create an action to get all posts', () => {
    const posts = []
    const expectedAction = {
      type: types.GET_ALL_POSTS,
      posts
    }
    expect(actions.getAllPosts(posts)).toEqual(expectedAction)
  })

  it('create an action to add a post', () => {
    const post = {
      id: 'id',
      title: 'Test with Jest',
      body: 'This is a post to test using jest',
      author: 'Jest',
      category: 'travel'
    }
    const expectedAction = {
      type: types.ADD_POST,
      id: 'id',
      title: 'Test with Jest',
      body: 'This is a post to test using jest',
      author: 'Jest',
      category: 'travel'
    }
    expect(actions.addPost(post)).toEqual(expectedAction)
  })

  it('comments of an post', () => {
    const parentId = '8xf0y6ziyjabvozdd253nd'
    const expectedAction = {
      type: types.GET_QTY_COMMENTS,
      parentId
    }
    expect(actions.getQtyComments(parentId)).toEqual(expectedAction)
  })
})

export const addPost = post => {
  return {
    type: ADD_POST,
    id: post.id,
    timestamp: post.timestamp,
    title: post.title,
    body: post.body,
    author: post.author,
    category: post.category
  }
}
