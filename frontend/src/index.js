import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import configureStore from './configureStore'
import './index.css'
import './start-service-worker'
import ErrorBoundary from './utils/ErrorBoundary'

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
