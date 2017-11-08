import React from 'react'
import Post from './Post'
import About from './About'
import PopularPosts from './PopularPosts'
import Category from './Category'
import Footer from './Footer'
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
        <div className="light-grey">
          <div className="content" style={{ maxWidth: 1400 }}>
            <header class="container center padding-32">
              <h1>
                <b>Nossas Rotas Blog</b>
              </h1>
              <p>
                Welcome to the blog of <span class="tag">Ivo & Mari</span>
              </p>
            </header>

            <div className="row">
              <div class="col l8 s12">
                {this.state.posts.map(post => (
                  <div class="card-4 margin white">
                    <Post key={post.id} post={post} />
                  </div>
                ))}
              </div>
              <div class="col l4">
                <div class="card margin margin-top">
                  <About />
                </div>

                <div class="card margin">
                  <div class="container padding">
                    <h4>Popular Posts</h4>
                  </div>
                  <PopularPosts />
                </div>

                <div class="card margin">
                  <div class="container padding">
                    <h4>Category</h4>
                  </div>
                  <Category />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
