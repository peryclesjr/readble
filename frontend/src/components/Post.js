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
          {post.author},{' '}
          <span class="opacity">{utils.formattedDate(post.timestamp)}</span>
        </h5>
        <div class="container">
          <p>{post.body.substr(0, 100).trim()}{'...'}</p>
          <div class="row">
            <div class="col m8 s12">
              <p>
                <button class="button padding-large white border">
                  <b>READ MORE »</b>
                </button>
              </p>
            </div>
            <div class="col m4 hide-small">
              <p>
                <span class="padding-large right">
                  <b>Comments </b> <span class="badge">0</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
