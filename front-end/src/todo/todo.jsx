import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/page-header'
import TodoList from './todo-list'
import TodoForm from './todo-form'

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {
  constructor () {
    super()

    this.state = {
      description: '',
      list: []
    }

    this.refresh()

    this.handleChange = (e) => {
      this.setState({
        description: e.target.value
      })
    }

    this.handleAdd = () => {
      const description = this.state.description
      axios.post(URL, {description})
        .then(resp => this.refresh())
    }

    this.handleRemove = (todo) => {
      axios.delete(`${URL}/${todo._id}`)
        .then(resp => this.refresh(this.state.description))
    }

    this.handleMarkAsDone = (todo) => {
      axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        .then((resp) => this.refresh(this.state.description))
    }

    this.handleMarkAsPending = (todo) => {
      axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then((resp) => this.refresh(this.state.description))
    }
    this.handleSearch = () => {
      this.refresh(this.state.description)
    }
    this.handleClear = () => {
      this.refresh()
    }
  }

  refresh (description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createAt${search}`)
      .then((resp) => this.setState({
        description,
        list: resp.data
      }))
  }

  render () {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm handleSearch={this.handleSearch}
          handleChange={this.handleChange}
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleClear={this.handleClear} />

        <TodoList
          handleMarkAsPending={this.handleMarkAsPending}
          handleMarkAsDone={this.handleMarkAsDone}
          handleRemove={this.handleRemove}
          list={this.state.list} />
      </div>
    )
  }
}

export default Todo
