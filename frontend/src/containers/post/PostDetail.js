import PropTypes from "prop-types"
import React from 'react'
import { FaTag } from 'react-icons/fa'
import Authorship from '../../components/Authorship'
import Comment from '../../components/Comment'
import ActionsPost from './ActionsPost'

const PostDetail = ({ post }) => (
  <div>
    <div className="card-4 white">
      <div className="container">
        <div className="row">
          <div className="col l10 m10 s10">
            <h3>
              <b>{post.title}</b>
            </h3>
          </div>
          <div className="col l2 m2 s2">
            <span className="tag light-gray small right">
              <FaTag/> {post.category}
            </span>
          </div>
        </div>
        <Authorship author={post.author} timestamp={post.timestamp}/>
        <div className="container">
          <p>{post.body}</p>
        </div>
        <div className="row margin">
          <ActionsPost post={post} classname="col l3 m3 s6 center"/>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="margin">
        <Comment/>
      </div>
    </div>
  </div>
)

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostDetail