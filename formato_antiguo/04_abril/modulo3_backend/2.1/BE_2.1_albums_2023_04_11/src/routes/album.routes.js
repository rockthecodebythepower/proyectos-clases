//Importaciones
const express = require("express")
//Importamos el modelo Album para poder utilizar sus métodos y atacar a la colección de Albums
const Album = require("../models/album.model")
//Creamos el router
const router = express.Router()

//GET ALL ALBUMS
router.get("/", async (req, res, next) => {
  try {
    const albums = await Album.find()
    return res.status(200).json(albums)
  } catch (error) {
    return next("Albums not found", error)
  }
})

//GET BY ID -> localhost:8080/api/albums/643594b0aa0653d69f1e3725 -> id = 643594b0aa0653d69f1e3725
router.get("/:id", async (req, res, next) => {
  try {
    const {id} = req.params
    const album = await Album.findById(id)
    return res.status(200).json(album)
  } catch (error) {
    return next("Album not found", error)
  }
})

//CREATE
router.post("/", async (req, res, next) => {
  try {
    const newAlbum = new Album(req.body)
    const createdAlbum = await newAlbum.save()
    return res.status(201).json(createdAlbum)
  } catch (error) {
    return next("Album creation failed", error)
  }
})

//DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    const {id} = req.params
    await Album.findByIdAndDelete(id)
    return res.status(200).json("Album deleted!")
  } catch (error) {
    return next("Album deletion failed", error)
  }
})

//UPDATE
router.put("/:id", async (req, res, next) => {
  try {
    const {id} = req.params
    const albumModified = new Album(req.body)
    //Igualamos el id con el actual, para que no lo modifique
    albumModified._id = id
    const albumUpdated = await Album.findByIdAndUpdate(id, albumModified, {
      //Con esta linea devuelve el nuevo actualizado
      new: true,
    })
    return res.status(200).json(albumUpdated)
  } catch (error) {
    return next("Album update failed", error)
  }
})

//Exportamos este router
module.exports = router
