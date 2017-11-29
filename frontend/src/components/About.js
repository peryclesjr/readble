import React from 'react'
import about from '../images/nossasrotas.jpg'

const About = () => (
  <div className="card margin margin-top">
    <img
      src={about}
      alt="Nossas Rotas - Aurora Boreal"
      style={{ width: '100%' }}
    />
    <div className="container white">
      <h4>
        <b>Ivo & Mari</b>
      </h4>
      <p>
        A nerd and an accountant who loves to travel the world on their
        vacation and get to know new cultures.
      </p>
    </div>
  </div>
)

export default About
