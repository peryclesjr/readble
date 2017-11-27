import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Authorship from '../../components/Authorship'
import { FaTag, FaThumbsUp, FaThumbsDown, FaComment } from 'react-icons/lib/fa'

class Posts extends React.Component {

  constructor(props) {
    super(props)

    this.voteHigh = '-voteScore'
    this.voteLow = 'voteScore'
    this.dateNew = '-timestamp'
    this.dateOld = 'timestamp'
    this.category = 'category'
    this.commentsHigh = '-commentCount'
    this.commentsLow = 'commentCount'

    this.state = {
      orderBy: this.dateNew
    }

    this.handleOrderByChange = this.handleOrderByChange.bind(this)
  }

  handleOrderByChange(e) {
    this.setState({ orderBy: e.target.value })
  }

  render() {
    const { posts } = this.props
    const { orderBy } = this.state

    return (
      <div>

        <div className="container">
          <div className="row">
            <div className="col l12 m12 s12">
              <select
                value={orderBy}
                onChange={this.handleOrderByChange}
                className="select margin-bottom">
                  <option value={this.voteHigh}>Vote Score (high to low)</option>
                  <option value={this.voteLow}>Vote Score (low to high)</option>
                  <option value={this.dateNew}>Date (newest to oldest)</option>
                  <option value={this.dateOld}>Date (oldest to newest)</option>
                  <option value={this.commentsHigh}>The most commented posts</option>
                  <option value={this.commentsLow}>The least commented posts</option>
                  <option value={this.category}>Category</option>
              </select>
            </div>
          </div>
        </div>

        {posts.sort(sortBy(orderBy)).map(post => (
          <div
            key={post.id}
            className="card-4 margin-bottom margin-left margin-right white">
            <div className="container">
              <div className="row">
                <div className="col l10 m10 s10">
                  <h3>
                    <b>{post.title}</b>
                  </h3>
                </div>
                <div className="col l2 m2 s2">
                  <span className="tag light-gray small right">
                    <FaTag /> {post.category}
                  </span>
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
                        to={`/${post.category}/${post.id}`}
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
                      {post.voteScore > 0 ? (
                        <FaThumbsUp size={25} />
                      ) : (
                        <FaThumbsDown size={25} />
                      )}{' '}
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
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      items: PropTypes.shape({
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired,
        commentCount: PropTypes.number.isRequired,
        voteScore: PropTypes.number.isRequired
      })
    })
  )
}

const mapStateToProps = state => ({
  posts: state.posts.items || []
})

export default connect(mapStateToProps)(Posts)
