import React from 'react'
import about from '../images/about.svg'

const About = () => (
  <div>
    <img src={about} style={{ "width" : "100%" }} />
    <div class="container white">
      <h4>
        <b>Ivo & Mari</b>
      </h4>
      <p>Um nerd e uma contabilista que adora viajar o mundo e conhecer novas culturas.</p>
    </div>
  </div>
)

export default About
