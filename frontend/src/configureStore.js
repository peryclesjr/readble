import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import nrBlog from './reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    nrBlog,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
}
