import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import nrBlog from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const loggerMiddleware = createLogger()

export default function configureStore() {
  return createStore(
    nrBlog,
    composeEnhancers(
      applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
  )
}
