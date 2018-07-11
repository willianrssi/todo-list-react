const express = require('express')

module.exports = function (server) {
  // API router

  const router = express.Router()
  server.use('/api', router)

  // Todo router

  const todoService = require('../api/todo/todo-service')
  todoService.register(router, '/todos')
}
