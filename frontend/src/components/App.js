import React from 'react'
import { Route } from 'react-router-dom'
import Principal from '../containers/Principal'
import AddPost from '../containers/post/AddPost'
import Header from './Header'
import Footer from './Footer'

const App = () => (
  <div>
    <div className="light-gray">
      <div className="content" style={{ maxWidth: 1400 }}>
        <Header />
        <div className="container">
          <Route exact path="/" component={Principal} />
          <Route exact path="/posts" component={AddPost} />
        </div>
      </div>
      <Footer />
    </div>
  </div>
)

export default App
