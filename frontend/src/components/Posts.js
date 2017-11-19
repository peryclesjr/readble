import React from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import Authorship from './Authorship'
import { FaTag, FaThumbsUp, FaThumbsDown, FaComment } from 'react-icons/lib/fa'

const Posts = ({ posts }) => (
  <div>
    {posts.sort(sortBy('-timestamp')).map(post => (
      <div key={post.id} className="card-4 margin white">
        <div className="container">
          <div className="row">
            <div className="col l10 m10 s10">
              <h3><b>{post.title}</b></h3>
            </div>
            <div className="col l2 m2 s2">
              <span className="tag light-gray small right"><FaTag /> {post.category}</span>
            </div>
          </div>
          <Authorship author={post.author} timestamp={post.timestamp} />
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
                  <FaComment size={25} />{' '}
                  <span className="badge">{post.commentCount}</span>
                </span>
              </div>
              <div className="col m3 hide-small">
                <span className="padding-large right">
                  {post.voteScore > 0
                    ? <FaThumbsUp size={25} />
                    : <FaThumbsDown size={25} />
                  }{' '}
                  <span className="badge">{post.voteScore}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Posts
