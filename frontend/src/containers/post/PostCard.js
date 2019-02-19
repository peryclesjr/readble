import React from 'react'
import { Link } from 'react-router-dom'
import { FaTag } from 'react-icons/fa'
import Authorship from "../../components/Authorship";
import ActionsPost from "./ActionsPost";

const PostCard = React.memo(function PostCard({post}) {
  return <div key={post.id} className="card-4 margin-bottom margin-left margin-right white">
    <div className="container">
      <div className="row">
        <div className="col l10 m10 s10">
          <h3>
            <Link to={`/${post.category}/${post.id}`}>
              <b>{post.title}</b>
            </Link>
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
        <p>
          {post.excerpt}
        </p>
        <div className="row">
          <div className="col m4 s12">
            <p>
              <Link to={`/${post.category}/${post.id}`} className="button padding-large white border">
                <b>READ MORE »</b>
              </Link>
            </p>
          </div>
          <div style={{paddingTop: 20}}>
            <ActionsPost post={post} classname="col m2 hide-small"/>
          </div>
        </div>
      </div>
    </div>
  </div>
})

export default (PostCard)
