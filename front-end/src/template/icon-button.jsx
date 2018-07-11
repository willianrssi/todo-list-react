import React from 'react'

const IconButton = ({ hide, style, onClick, icon }) => (
  !hide && <button className={`btn btn-${style}`}
    onClick={onClick} >
    <i className={`fa fa-${icon}`} />
  </button>
)

export default IconButton
