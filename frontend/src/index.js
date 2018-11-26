import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import './index.css'
import App from './components/App'
import ErrorBoundary from './utils/ErrorBoundary'
import './start-service-worker'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL + '/'} >
      <ErrorBoundary>
          <App />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
