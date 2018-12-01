import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchAddComment } from '../../actions/comments'

const CommentForm = ({ dispatch, post_id }) => {
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
          dispatch(fetchAddComment(body.value, _author, post_id))
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
  post_id: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  post_id: state.postDetailed.item.id
})

export default connect(mapStateToProps)(CommentForm)
