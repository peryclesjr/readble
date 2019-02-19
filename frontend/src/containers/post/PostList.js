import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import sortBy from 'sort-by'
import Pagination from '../../utils/Pagination'
import PostCard from './PostCard'

class PostList extends React.Component {
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
      orderBy: this.dateNew,
      pageOfItems: [],
      items: []
    }

  }

  handlePageChange = (pageOfItems) => {
    this.setState({ pageOfItems: pageOfItems })
  }

  handleOrderByChange = (e) => {
    this.setState({ orderBy: e.target.value })
    let sortedItems = this.props.posts.sort(sortBy(e.target.value))
    this.setState({ items: sortedItems })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.posts !== nextProps.posts) {
      this.setState({ items: nextProps.posts.sort(sortBy(this.state.orderBy)) })
    }
  }

  render() {
    const { orderBy, items, pageOfItems } = this.state

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col l12 m12 s12">
              <select value={orderBy} onChange={this.handleOrderByChange} className="select margin-bottom">
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

        {pageOfItems.map(post => (<PostCard post={post}/>))}
        <Pagination items={items} orderBy={orderBy} onChangePage={this.handlePageChange}/>
      </div>
    )
  }
}

PostList.propTypes = {
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

export default connect(mapStateToProps)(PostList)
