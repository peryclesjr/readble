import React from 'react'

const PopularPosts = () => (
  <ul className="ul hoverable white">
    <li className="padding-16">
      <img
        src="https://www.w3schools.com/w3images/workshop.jpg"
        alt="pop posts"
        className="left margin-right"
        style={{ width: 50 }}
      />
      <span className="large">Lorem</span>
      <br />
      <span>Sed mattis nunc</span>
    </li>
    <li className="padding-16">
      <img
        src="https://www.w3schools.com/w3images/gondol.jpg"
        alt="pop posts"
        className="left margin-right"
        style={{ width: 50 }}
      />
      <span className="large">Ipsum</span>
      <br />
      <span>Praes tinci sed</span>
    </li>
    <li className="padding-16">
      <img
        src="https://www.w3schools.com/w3images/skies.jpg"
        alt="pop posts"
        className="left margin-right"
        style={{ width: 50 }}
      />
      <span className="large">Dorum</span>
      <br />
      <span>Ultricies congue</span>
    </li>
    <li className="padding-16 hide-medium hide-small">
      <img
        src="https://www.w3schools.com/w3images/rock.jpg"
        alt="pop posts"
        className="left margin-right"
        style={{ width: 50 }}
      />
      <span className="large">Mingsum</span>
      <br />
      <span>Lorem ipsum dipsum</span>
    </li>
  </ul>
)

export default PopularPosts
