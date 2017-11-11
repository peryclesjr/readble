import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import nrBlog from './reducers'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(
  nrBlog,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
