import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { fetchAddPost } from '../../actions/posts'
import { fetchCategories } from '../../actions/categories'

class AddPost extends React.Component {

  constructor () {
    super();
    this.state = {
      fireRedirect: false
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories())
  }

  render() {

    const { categories, dispatch } = this.props
    const { fireRedirect } = this.state

    let title, body, author, category

    return (
      <div>
        <form
          onSubmit={e => {

            e.preventDefault()

            const catValue = document.getElementById("category")
            category = catValue.options[catValue.selectedIndex].value;

            if (!body.value.trim() || !title.value.trim() || !category.trim()) {
              return
            }

            dispatch(
              fetchAddPost(title.value, body.value, author.value, category)
            )
            this.setState({ fireRedirect: true })
          }}>

          <div className="row">
            <div className="col l12 m12 s12">
              <input
                className="input margin-bottom left"
                placeholder="Author"
                ref={node => {
                  author = node
                }}
              />
            </div>

            <div className="col l12 m12 s12">
              <select id="category" className="select margin-bottom right">
                <option value=''>Choose a category</option>
                {categories.map((cat) => (
                  <option key={cat.path}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="col l12 m12 s12">
              <input
                className="input margin-bottom"
                placeholder="Title"
                ref={node => {
                  title = node
                }}
              />
            </div>

            <div className="col l12 m12 s12">
              <textarea
                className=" margin-bottom"
                placeholder="Write your post here"
                rows="9"
                ref={node => {
                  body = node
                }}
              />
            </div>
          </div>

          <button className="button border right" type="submit">
            Add Post
          </button>

        </form>

        { fireRedirect && <Redirect to='/'/> }

      </div>
    )
  }
}

AddPost.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  categories: state.categories.data || []
})

export default connect(mapStateToProps)(AddPost)
