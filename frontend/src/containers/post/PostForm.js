import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchAddPost, fetchUpdatePost } from '../../actions/posts'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

class PostForm extends React.PureComponent {
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
  }

  handleAuthorChange = (e) => {
    this.setState({ author: e.target.value })
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleBodyChange = (body) => {
    this.setState({ body })
  }

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { postData, dispatch } = this.props
    const { author, category, title, body } = this.state

    const postOwner = author ? author : 'Anonymous'

    postData.id
      ? dispatch(fetchUpdatePost(title, body, postData.id))
      : dispatch(fetchAddPost(title, body, postOwner, category))

    this.setState({ fireRedirect: true })
  }

  render() {
    const { postData, categories } = this.props
    const {
      fireRedirect, author, category,
      title, body, createUpdateButtonLabel
    } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col l12 m12 s12">
              <input
                type="text"
                value={author}
                onChange={this.handleAuthorChange}
                className="input margin-bottom left"
                placeholder="Author"
                disabled={postData.id !== undefined}
                required
              />
            </div>

            <div className="col l12 m12 s12">
              <select
                value={category}
                onChange={this.handleCategoryChange}
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
                type="text"
                value={title}
                onChange={this.handleTitleChange}
                className="input margin-bottom"
                placeholder="Title"
                required
              />
            </div>

            <div className="col l12 m12 s12">
              <ReactQuill
                theme="snow"
                value={body}
                onChange={this.handleBodyChange}
                placeholder="Write your post here"
                required
                className="margin-bottom"
              />
            </div>

            <div className="col l12 m12 s12">
              <button className="button border right" type="submit">
                {createUpdateButtonLabel}
              </button>
            </div>
          </div>

        </form>

        {fireRedirect && <Redirect to="/" />}
      </div>
    )
  }
}

PostForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  postData: PropTypes.object,
  categories: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  postData: state.preparePostForm.item || {},
  categories: state.categories.data || []
})

export default connect(mapStateToProps)(PostForm)
