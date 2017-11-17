import React from 'react'
import * as utils from '../utils/helpers'

const Authorship = ({ author, timestamp }) => (
  <h5>
    <b>{author}{' '}</b>
    <span className="opacity">{utils.formattedDate(timestamp)}</span>
  </h5>
)

export default Authorship
