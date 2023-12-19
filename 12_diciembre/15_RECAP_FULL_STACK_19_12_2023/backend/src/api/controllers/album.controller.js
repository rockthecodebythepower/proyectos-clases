const Album = require("../models/album.model");

const getAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find();
    return res.status(200).json(albums);
  } catch (error) {
    return res.status(400).json("Cannot get albums", error);
  }
};

const createAlbum = async (req, res, next) => {
  try {
    const newAlbum = new Album(req.body);
    await newAlbum.save();
    return res.status(201).json(newAlbum);
  } catch (error) {
    return res.status(400).json("Cannot create album", error);
  }
};

const deleteAlbum = async(req,res,next) => {
  try {
    const {id} = req.params;
    await Album.findByIdAndDelete(id);
    return res.status(200).json("Album deleted")
  } catch (error) {
    return res.status(400).json("Error deleting album", error)
  }
}

module.exports = { getAlbums, createAlbum, deleteAlbum };
