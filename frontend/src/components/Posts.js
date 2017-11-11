import React from 'react'
import { Link } from 'react-router-dom'
import * as utils from '../utils/helpers'

class Posts extends React.Component {
  render() {
    const { posts } = this.props
    return (
      <div>
        {posts.map(post => (
          <div className="card-4 margin white">
            <div className="container">
              <h3>
                <b>{post.title}</b>
              </h3>
              <h5>
                {post.author}{' '}
                <span className="opacity">{utils.formattedDate(post.timestamp)}</span>
              </h5>
              <div className="container">
                <p>
                  {post.body.substr(0, 100).trim()}
                  {'...'}
                </p>
                <div className="row">
                  <div className="col m6 s12">
                    <p>
                      <Link
                        to={`/post/${post.id}`}
                        className="button padding-large white border">
                        <b>READ MORE »</b>
                      </Link>
                    </p>
                  </div>
                  <div className="col m3 hide-small">
                    <span className="padding-large right">
                      <b>Comments</b>{' '}
                      <span className="badge">{post.commentCount}</span>
                    </span>
                  </div>
                  <div className="col m3 hide-small">
                    <span className="padding-large right">
                      <b>Vote Score</b> <span className="badge">{post.voteScore}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Posts
