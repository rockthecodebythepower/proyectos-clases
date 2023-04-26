//Importaciones
const mongoose = require("mongoose")

//Creamos un schema de mongoose
const AlbumSchema = new mongoose.Schema({
  title: {type: String, required: true, trim: true},
  cover: {type: String, required: true, trim: true},
  artist: {type: String, required: true, trim: true},
  year: {type: Number, required: false},
})

//Creamos el modelo de mongoose con nuestro schema
const Album = mongoose.model("Album", AlbumSchema)

//Exportamos
module.exports = Album
