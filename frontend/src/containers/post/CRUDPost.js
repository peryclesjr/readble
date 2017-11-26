import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { fetchAddPost, fetchUpdatePost } from '../../actions/posts'
import { fetchCategories } from '../../actions/categories'

class CRUDPost extends React.Component {
  constructor(props) {
    super(props)
    const { postData } = props

    this.state = {
      fireRedirect: false,
      author: postData.author || '',
      category: postData.category || '',
      title: postData.title || '',
      body: postData.body || '',
      createUpdateButtonLabel: postData.id ? 'Update Post' : 'Add Post'
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleAuthorChange(e) {
    this.setState({
      author: e.target.value });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleBodyChange(e) {
    this.setState({ body: e.target.value })
  }

  handleCategoryChange(e) {
    this.setState({ category: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { postData, dispatch } = this.props
    const { author, category, title, body } = this.state

    const postOwner = author ? author : 'Anonymous'

    postData.id
      ? dispatch(fetchUpdatePost(title, body, postData.id))
      : dispatch(fetchAddPost(title, body, postOwner, category))

    this.setState({ fireRedirect: true })
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories())
  }

  render() {
    const { postData, categories } = this.props
    const { fireRedirect, author, category, title, body, createUpdateButtonLabel } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col l12 m12 s12">
              <input
                type="text" value={author} onChange={this.handleAuthorChange}
                className="input margin-bottom left"
                placeholder="Author"
                disabled={postData.id !== undefined}
                required
              />
            </div>

            <div className="col l12 m12 s12">
              <select value={category} onChange={this.handleCategoryChange}
                  className="select margin-bottom right"
                  disabled={postData.id !== undefined}
                  required
              >
                <option value="">Choose a category</option>
                {categories.map(cat => (
                  <option key={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="col l12 m12 s12">
              <input
                type="text" value={title} onChange={this.handleTitleChange}
                className="input margin-bottom"
                placeholder="Title"
                required
              />
            </div>

            <div className="col l12 m12 s12">
              <textarea
                value={body} onChange={this.handleBodyChange}
                className="margin-bottom"
                placeholder="Write your post here"
                rows="9"
                required
              />
            </div>
          </div>

          <button className="button border right" type="submit">
            {createUpdateButtonLabel}
          </button>

        </form>

        {fireRedirect && <Redirect to="/" />}
      </div>
    )
  }
}

CRUDPost.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string
  })).isRequired
}

const mapStateToProps = state => ({
  postData: state.updatePost.item || {},
  categories: state.categories.data || []
})

export default connect(mapStateToProps)(CRUDPost)
