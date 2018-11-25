import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchAddComment } from '../../actions/comments'

const CommentForm = ({ dispatch, post }) => {
  let body, author
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!body.value.trim()) {
            return
          }
          const _author = author.value ? author.value : 'Anonymous'
          dispatch(fetchAddComment(body.value, _author, post.id))
          body.value = ''
          author.value = ''
        }}
      >
        <div className="row">
          <div className="col l12 m12 s12">
            <input
              className="input"
              placeholder="Anonymous"
              ref={node => { author = node }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col l12 m12 s12">
            <textarea
              className="margin-top"
              placeholder="Comment"
              rows="2"
              ref={node => { body = node }}
            />
          </div>
        </div>
        <button className="button margin-top border" type="submit">
          Add Comment
        </button>
      </form>
    </div>
  )
}

CommentForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post: state.postDetailed.item || '' /* review this default value */
})

export default connect(mapStateToProps)(CommentForm)
