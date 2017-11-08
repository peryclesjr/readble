import React from 'react'
import * as utils from '../utils/helpers'

class Post extends React.Component {
  render() {
    const { post } = this.props
    return (
      <li key={post.id}>
        Id: {post.id}
        <br />
        Time: {utils.formattedTime(post.timestamp)}
        <br />
        Title: {post.title}
        <br />
        Body: {post.body}
        <br />
        Author: {post.author}
        <br />
        Category: {post.category}
        <br />
        Votes: {post.voteScore}
        <br />
        {post.deleted}
        <br />
      </li>
    )
  }
}

export default Post
