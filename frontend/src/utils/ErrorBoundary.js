import React from 'react'
import PropTypes from "prop-types"
import { fetchCategories } from '../actions/categories'
import connect from "react-redux/es/connect/connect"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
    this.props.dispatch(fetchCategories())
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({error, errorInfo})
  }

  render() {
    const {error, errorInfo} = this.state
    if (this.props.categories.length === 0) {
      return (
        <h1>Server is down!</h1>
      )
    }
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{whiteSpace: 'pre-wrap'}}>
            {error && error.toString()}
            <br/>
            {errorInfo.componentStack}
          </details>
        </div>
      )
    }
    // Normally, just render children
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  categories: state.categories.data || []
})

export default connect(mapStateToProps)(ErrorBoundary)