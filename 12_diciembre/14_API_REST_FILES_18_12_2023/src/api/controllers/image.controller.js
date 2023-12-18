const Image = require("../models/image.model");
const deleteFile = require("../../utils/deletefile");

const getImages = async (req, res, next) => {
  try {
    const images = await Image.find();
    return res.status(200).json(images);
  } catch (error) {
    return res.status(400).json("Cannot get images", error);
  }
};

const createImage = async (req, res, next) => {
  try {
    const newImage = new Image(req.body);
    if (req.files) {
      newImage.url = req.files.url[0].path;
    }
    const savedImage = await newImage.save();
    return res.status(201).json(savedImage);
  } catch (error) {
    return res.status(400).json("Cannot create image", error);
  }
};

const deleteImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const imageDeleted = await Image.findByIdAndDelete(id);
    deleteFile(imageDeleted.url);
    return res.status(200).json(imageDeleted);
  } catch (error) {
    return res.status(400).json("Cannot delete image", error);
  }
};

module.exports = { getImages, createImage, deleteImage };
