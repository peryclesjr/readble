import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { fetchAddPost, fetchUpdatePost } from '../../actions/posts'
import { fetchCategories } from '../../actions/categories'

class AddPost extends React.Component {
  constructor() {
    super()
    this.state = {
      fireRedirect: false
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories())
  }

  render() {
    const { postData, categories, dispatch } = this.props
    const { fireRedirect } = this.state

    let title, body, author, category, createUpdateButtonLabel = 'Create Post'

    if (postData.id) {
      title = postData.title
      body = postData.body
      author = postData.author
      category = postData.category
      createUpdateButtonLabel = 'Update Post'
    }

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()

            const catValue = document.getElementById('category')
            category = catValue.options[catValue.selectedIndex].value

            const postOwner = author.value ? author.value : 'Anonymous'

            postData.id
              ? dispatch(fetchUpdatePost(title.value, body.value, postData.id))
              : dispatch(fetchAddPost(title.value, body.value, postOwner, category))

            this.setState({ fireRedirect: true })
          }}>
          <div className="row">
            <div className="col l12 m12 s12">
              <input
                className="input margin-bottom left"
                placeholder="Author"
                defaultValue={author}
                ref={node => {
                  author = node
                }}
              />
            </div>

            <div className="col l12 m12 s12">
              <select id="category" className="select margin-bottom right">
                <option value="">Choose a category</option>
                {categories.map(cat => (
                  <option key={cat.path}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="col l12 m12 s12">
              <input
                className="input margin-bottom"
                placeholder="Title"
                defaultValue={title}
                ref={node => {
                  title = node
                }}
              />
            </div>

            <div className="col l12 m12 s12">
              <textarea
                className="margin-bottom"
                placeholder="Write your post here"
                rows="9"
                defaultValue={body}
                ref={node => {
                  body = node
                }}
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

AddPost.PropTypes = {
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

export default connect(mapStateToProps)(AddPost)
