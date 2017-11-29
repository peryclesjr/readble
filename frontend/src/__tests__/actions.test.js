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
      title: 'Test with Jest',
      body: 'This is a post to test using jest',
      author: 'Jest',
      category: 'travel'
    }
    const expectedAction = {
      type: types.ADD_POST,
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
