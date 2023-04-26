const Photo = require("../models/photo.model")

const {deleteImgCloudinary} = require("../../middlewares/files.middleware")

const getAllPhotos = async (req, res, next) => {
  try {
    const photos = await Photo.find().populate("author")
    return res.status(200).json(photos)
  } catch (error) {
    return next(error)
  }
}

const createPhoto = async (req, res, next) => {
  try {
    const newPhoto = new Photo({
      ...req.body,
      url: req.file ? req.file.path : "Not photo provided",
    })
    const createdPhoto = await newPhoto.save()
    return res.status(201).json(createdPhoto)
  } catch (error) {
    return next(error)
  }
}

const deletePhoto = async (req, res, next) => {
  try {
    const {id} = req.params
    const photo = await Photo.findByIdAndDelete(id)
    if (photo.url) {
      deleteImgCloudinary(photo.url)
    }
    return res.status(200).json(photo)
  } catch (error) {
    return next(error)
  }
}

const updatePhoto = async (req, res, next) => {
  try {
    const {id} = req.params
    const photo = new Photo(req.body)
    photo._id = id
    const prevPhoto = await Photo.findById(id)
    if (req.file) {
      deleteImgCloudinary(prevPhoto.url)
      photo.url = req.file.path
    }

    const updatedPhoto = await Photo.findByIdAndUpdate(id, photo)
    return res.status(200).json(updatedPhoto)
  } catch (error) {
    return next(error)
  }
}

module.exports = {getAllPhotos, createPhoto, deletePhoto, updatePhoto}
