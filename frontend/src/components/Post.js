import React from 'react'
import Comment from './Comment'

class Post extends React.Component {
  state = {
    comments: []
  }

  getComments = id => {
    fetch(`http://localhost:3001/posts/${id}/comments`, {
      headers: { Authorization: 'whatever-I-want' }
    })
      .then(res => res.json())
      .then(comments => this.setState({ comments }))
  }

  componentWillReceiveProps(nextProps) {
    this.getComments(nextProps.id)
  }

  render() {
    const { post } = this.props
    const { comments } = this.state
    return (
      <li key={post.id}>
        {post.id}
        <br />
        {post.timestamp}
        <br />
        {post.title}
        <br />
        {post.body}
        <br />
        {post.author}
        <br />
        {post.category}
        <br />
        {post.voteScore}
        <br />
        {post.deleted}
        <br />
        <ol>
          {comments.map(c => <Comment comment={c} />)}
        </ol>
      </li>
    )
  }
}

export default Post
