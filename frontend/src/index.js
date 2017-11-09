import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import nrBlog from './reducers'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(nrBlog)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
