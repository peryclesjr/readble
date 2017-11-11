import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Principal from './Principal'
import Post from './Post'
import Footer from './Footer'
import NotFound from './NotFound'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="light-grey">
          <div className="content" style={{ maxWidth: 1400 }}>
            <Header />
            <Switch>
              <Route exact path="/" component={Principal} />
              <Route path="/post/:id" component={Post} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
