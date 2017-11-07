import React from 'react'
import Post from './Post'

class App extends React.Component {
  state = { posts: [] }

  getPosts = () => {
    fetch('http://localhost:3001/posts', {
      headers: { Authorization: 'whatever-I-want' }
    })
      .then(res => res.json())
      .then(posts => this.setState({ posts }))
  }

  componentDidMount() {
    this.getPosts()
  }

  render() {
    return (
      <div>
        <h1>Posts & Comments</h1>
        <ol>
          {this.state.posts.map(post => (
            <Post post={post} />
          ))}
        </ol>
      </div>
    )
  }
}

export default App
