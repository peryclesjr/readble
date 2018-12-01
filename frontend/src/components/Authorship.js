import React from 'react'
import * as utils from '../utils/helpers'
import PropTypes from 'prop-types'

const Authorship = ({ author, timestamp, showTime }) => (
  <h5>
    <b>{author}{' '}</b>
    <span className="opacity small">
      {utils.formattedDate(timestamp)} {showTime &&  ' - ' + utils.formattedTime(timestamp)}
     </span>
  </h5>
)

 Authorship.propTypes = {
  author: PropTypes.string,
  timestamp: PropTypes.number,
  showTime: PropTypes.bool
}

export default Authorship
