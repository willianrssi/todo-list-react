import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/icon-button'

const TodoForm = ({ handleAdd, handleChange, handleSearch, description, handleClear }) => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? handleSearch() : handleAdd()
    } else if (e.key === 'Escape') {
      handleClear()
    }
  }
  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10'>
        <input onKeyUp={keyHandler} onChange={handleChange} value={description} id='description' className='form-control' placeholder='Adiconar uma Tarefa' type='text' />
      </Grid>
      <Grid cols='12 3 2'>
        <IconButton onClick={handleAdd} hide={false} style='primary' icon='plus' />
        <IconButton onClick={handleSearch} hide={false} style='info' icon='search' />
        <IconButton onClick={handleClear} hide={false} style='default' icon='close' />
      </Grid>
    </div>
  )
}

export default TodoForm
