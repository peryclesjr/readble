import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FaTags from 'react-icons/lib/fa/tags'
import { Link } from 'react-router-dom'
import { fetchCategories } from '../actions/categories'

class Category extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories())
  }
  render() {
    return (
      <div className="card margin">
        <div className="container padding">
          <h4><FaTags /> Categories</h4>
        </div>
        <div className="container white">
          <p>
            {this.props.categories.map(cat => (
              <Link key={cat.path} to={`/${cat.path}`}>
                <span className="tag light-gray small margin">
                  {cat.name}
                </span>
              </Link>
            ))}
          </p>
        </div>
      </div>
    )
  }
}

Category.propTypes = {
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  categories: state.categories.data || []
})

export default connect(mapStateToProps)(Category)
