import * as actions from '../actions/posts'
import * as actionsComments from '../actions/comments'
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

  it('quantity comments of an post', () => {
    const parentId = '8xf0y6ziyjabvozdd253nd'
    const expectedAction = {
      type: types.GET_QTY_COMMENTS,
      parentId
    }
    expect(actions.getQtyComments(parentId)).toEqual(expectedAction)
  })
})

describe('comment actions', () => {
  it('create an action to remove comments of an post', () => {
    const id = '894tuq4ut84ut8v4t8wun89g'
    const expectedAction = {
      type: types.REMOVE_COMMENT,
      id
    }
    expect(actionsComments.removeComment(id)).toEqual(expectedAction)
  })

  it('create an action to get comments votes', () => {
    const vote = 'upVote'
    const id = '8tu4bsun805n8un48ve89'
    const expectedAction = {
      type: types.GET_COMMENT_VOTES,
      vote,
      id
    }
    expect(actionsComments.getVotes(vote, id)).toEqual(expectedAction)
  })
})
