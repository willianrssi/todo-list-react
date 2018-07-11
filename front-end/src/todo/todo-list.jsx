import React from 'react'
import IconButton from '../template/icon-button'
import './custom.css'

const TodoList = ({ list, handleRemove, handleMarkAsDone, handleMarkAsPending }) => (
  <table className='table'>
    <thead>
      <tr>
        <th>Descrição</th>
        <th className='tableActions'>Ações</th>
      </tr>
    </thead>
    <tbody>
      {list ? list.map((todo) => <tr key={todo._id}>
        <td className={todo.done ? 'marked-done' : ''} >{todo.description}</td>
        <td> <IconButton onClick={() => handleMarkAsDone(todo)} style='success' icon='check' hide={todo.done} />
          <IconButton onClick={() => handleMarkAsPending(todo)} style='warning' icon='undo' hide={!todo.done} />
          <IconButton onClick={() => handleRemove(todo)} style='danger' icon='trash-o' hide={!todo.done} /> </td>
      </tr>)
        : {} }
    </tbody>
  </table>
)

export default TodoList
