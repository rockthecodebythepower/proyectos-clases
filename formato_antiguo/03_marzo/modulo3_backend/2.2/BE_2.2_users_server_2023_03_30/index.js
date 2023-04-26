const express = require('express')
const cors = require('cors')
const connect = require('./src/utils/connect')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT

const server = express()
server.use(
  cors({
    origin: '*',
  })
)
server.use(express.json({ limit: '5mb' }))
server.use(express.urlencoded({ limit: '5mb', extended: false }))

connect()

//Routes
const UsersRouter = require('./src/api/routes/user.routes')
server.use('/api/v1/users', UsersRouter)

server.use('*', (req, res) => {
  return res.json('Endpoint not found')
})

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
