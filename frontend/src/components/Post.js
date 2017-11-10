import React from 'react'
import * as api from '../utils/api'

const Post = ({ match }) => (
  <div className="container">
    <h1>{match.params.id}</h1>
  </div>
)

export default Post
