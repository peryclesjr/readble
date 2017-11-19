import React from 'react'
import Header from './Header'
import Principal from '../containers/Principal'
import Footer from './Footer'

const App = () => (
  <div>
    <div className="light-gray">
      <div className="content" style={{ maxWidth: 1400 }}>
        <Header />
        <Principal />
      </div>
      <Footer />
    </div>
  </div>
)

export default App
