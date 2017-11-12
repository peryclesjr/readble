import React from 'react'
import * as api from '../utils/api'


const Post = ({ match }) => (
  <div className="container">
    {console.log(api.getPostById(match.params.id))}
  </div>
)

export default Post
