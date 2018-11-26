import React from 'react'
import octocat from '../images/octocat.png'

const About = () => (
  <div className="card margin margin-top">
    <img
      src={octocat}
      alt="Octocat"
      style={{ width: '100%' }}
    />
    <div className="container white">
      <h4><b>Octocat</b></h4>
      <p>I'm a fluffy Octocat</p>
    </div>
  </div>
)

export default About
