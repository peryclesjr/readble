import React from 'react'
import * as utils from '../utils/helpers'

class Post extends React.Component {
  render() {
    const { post } = this.props
    return (
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
          <div className="row cell-middle">
            <div className="col m6 s12">
              <p>
                <button className="button padding-large white border">
                  <b>READ MORE »</b>
                </button>
              </p>
            </div>
            <div className="col m4 hide-small">
              <span className="padding-large right"><b>Comments  </b> <span className="badge">{post.commentCount}</span></span>
            </div>
            <div className="col m2 hide-small">
              <span className="padding-large right cell-middle"><b>Likes  </b> <span className="badge">{post.voteScore}</span></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
