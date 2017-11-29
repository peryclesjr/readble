import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className="container center padding-32">
    <h1>
      <a href="/">
        <b>Nossas Rotas Blog</b>
      </a>
    </h1>
    <p>
      Welcome to the blog of <span className="tag">Ivo & Mari</span>
    </p>
  </header>
)

export default Header
