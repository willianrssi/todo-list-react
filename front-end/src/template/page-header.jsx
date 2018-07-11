import React from 'react'

const PageHeader = ({ name, small }) => (
  <header className='page-header'>
    <h2>{name} <small>{small}</small></h2>
  </header>
)

export default PageHeader
