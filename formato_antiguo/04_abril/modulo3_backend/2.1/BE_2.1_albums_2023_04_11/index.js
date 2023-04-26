//Importaciones:
const express = require("express")
const dotenv = require("dotenv")
//Importamos la función connect
const connect = require("./src/utils/connect")

//Configurar dotenv para arrancarlo y poder utilizarlo
dotenv.config()

//Recupero la variable de entorno PORT
const PORT = process.env.PORT

//Creamos el servidor con express
const server = express()

//Nos conectamos con MONGO
connect()

//Le indicamos que la información que le llega al server por el body es de tipo json y a través de urls
server.use(express.json())
server.use(express.urlencoded({extended: false}))

//Routes
const AlbumRoutes = require("./src/routes/album.routes")
server.use("/api/albums", AlbumRoutes)

//Controlamos las rutas "Not found"
server.use("*", (req, res, next) => {
  const error = new Error("Route not found")
  error.status = 404
  next(error)
})

//Escuchamos nuestro servidor para dejarlo levantado en el puerto que hemos indicado
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
