import React from 'react'

const Footer = () => (
  <footer class="container dark-grey padding-32 margin-top">
    <button class="button black disabled padding-large margin-bottom">
      Previous
    </button>
    <button class="button black padding-large margin-bottom">Next »</button>
    <p>
      Powered by{' '}
      <a
        href="https://www.instagram.com/nossasrotas/"
        target="_blank"
        rel="noopener noreferrer">
        Ivo & Mari
      </a>
      {' with help of '}
      <a
        href="https://br.udacity.com/"
        target="_blank"
        rel="noopener noreferrer">
        Udacity
      </a>
    </p>
  </footer>
)

export default Footer
