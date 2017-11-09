import React from 'react'
import * as utils from '../utils/helpers'
import comment from '../images/comment.svg'
import like from '../images/like.svg'

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
          <div className="row">
            <div className="col m8 s12">
              <p>
                <button className="button padding-large white border">
                  <b>READ MORE »</b>
                </button>
              </p>
            </div>
            <div className="col m4 hide-small">
              <p>
                <span className="padding-8 margin right">
                  <img src={comment} alt="logo" />
                  <span className="badge">{post.commentCount}</span>
                </span>
                <span className="padding-8 margin right">
                  <img src={like} alt="logo" />
                  <span className="badge">{post.voteScore}</span>
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
