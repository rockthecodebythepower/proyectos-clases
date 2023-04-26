const express = require("express")

const PhotoRouter = express.Router()
const {upload} = require("../../middlewares/files.middleware")

const isAuth = require("../../middlewares/auth.middleware")

const {
  getAllPhotos,
  createPhoto,
  deletePhoto,
  updatePhoto,
} = require("../controllers/photo.controller")

PhotoRouter.get("/", getAllPhotos)
PhotoRouter.post("/", [isAuth], upload.single("url"), createPhoto)
PhotoRouter.delete("/:id", [isAuth], deletePhoto)
PhotoRouter.patch("/:id", [isAuth], upload.single("url"), updatePhoto)

module.exports = PhotoRouter
