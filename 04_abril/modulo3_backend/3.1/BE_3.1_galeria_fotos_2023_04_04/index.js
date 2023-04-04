const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connect = require("./src/utils/connect")
const {configCloudinary} = require("./src/middlewares/files.middleware")

dotenv.config()

const PORT = process.env.PORT

connect()
configCloudinary()

const server = express()
server.use(
  cors({
    origin: "*",
    credentials: true,
  })
)
server.use(express.json({limit: "5mb"}))
server.use(express.urlencoded({limit: "5mb", extended: false}))

//Routes
const PhotoRouter = require("./src/api/routes/photo.routes")
server.use("/api/v1/photos", PhotoRouter)
const UserRouter = require("./src/api/routes/user.routes")
server.use("/api/v1/users", UserRouter)

server.use("*", (req, res, next) => {
  const error = new Error("Route not found")
  return next(error)
})

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
