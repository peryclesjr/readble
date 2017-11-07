import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const { comment } = this.props

    return <li key={comment.id}>{comment.auhtor}</li>
  }
}

export default Comment
