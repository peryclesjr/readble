import React from 'react'
import Post from './Post'
import * as api from '../API/ServerAPI'

class App extends React.Component {
  state = { posts: [] }

  getAllPosts = () => {
    api.getAllPosts().then(posts => this.setState({ posts }))
  }

  componentDidMount() {
    this.getAllPosts()
  }

  render() {
    return (
      <div>
        <h1>Posts & Comments</h1>
        <ul>
          {this.state.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
