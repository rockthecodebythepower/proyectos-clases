const express = require('express')
const UsersRouter = express.Router()

const {
  getAllUsers,
  createUser,
  deleteUser,
  insertAllUsers,
  dropUsers,
} = require('../controllers/user.controllers')

UsersRouter.get('/', getAllUsers)
UsersRouter.post('/', createUser)
UsersRouter.delete('/:id', deleteUser)
UsersRouter.get('/insertallusers', insertAllUsers)
UsersRouter.get('/deleteallusers', dropUsers)

module.exports = UsersRouter
