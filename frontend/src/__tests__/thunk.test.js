import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import * as actionsPost from '../actions/posts'
import * as actionsCategories from '../actions/categories'
import * as types from '../actions/ActionTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const headers = {
  Accept: 'application/json',
  Authorization: 'whatever',
  'Content-Type': 'application/json'
}

const categories = [
  {
    name: 'travel',
    path: 'travel'
  },
  {
    name: 'roadtrip',
    path: 'roadtrip'
  },
  {
    name: 'eurotrip',
    path: 'eurotrip'
  }
]

const post = {
  id: '6agU81kU8mkG6q5sU5B',
  timestamp: 1478511236253,
  title: 'Brasilia',
  body: 'small body for test',
  author: 'Ivo',
  category: 'travel',
  voteScore: -3,
  deleted: false,
  commentCount: 0
}

const title = 'new post'
const body = 'new body'
const author = 'new author'
const category = 'travel'

describe('async post actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates GET_POST when fetching post has been done', () => {
    fetchMock.getOnce('/travel/6agU81kU8mkG6q5sU5B', {})

    const expectedActions = [{ post, type: types.GET_POST }]
    const store = mockStore({ post: {} })

    return store
      .dispatch(actionsPost.fetchPost('6agU81kU8mkG6q5sU5B'))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
  /* 
  it('create ADD_POST', () => {
    fetchMock.getOnce('/posts', {
      body: {
        title,
        body,
        author,
        category
      },
      headers
    })

    const expectedActions = [
      {
        author: author,
        body: body,
        category: category,
        title: title,
        id: '',
        timestamp: '',
        type: types.ADD_POST
      }
    ]
    const store = mockStore({ post: {} })

    return store
      .dispatch(actions.fetchAddPost(title, body, author, category))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
*/
})

describe('async categories actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates GET_CATEGORIES when fetching categories has been done', () => {
    fetchMock.getOnce('/categories', {})

    const expectedActions = [{ categories, type: types.GET_CATEGORIES }]
    const store = mockStore({ categories: [] })

    return store.dispatch(actionsCategories.fetchCategories()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
