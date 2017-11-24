import React from 'react'
import { Route, Switch } from 'react-router-dom'
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
          <Switch>
            <Route path="/posts" component={AddPost} />
            <Route path="/posts/:id" component={AddPost} />
            <Route component={Principal} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  </div>
)

export default App
