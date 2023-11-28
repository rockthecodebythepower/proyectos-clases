const Artist = require("../models/artists");

//? CRUD - CREATE - READ - UPDATE - DELETE

//! CREATE
const postArtist = async (req, res, next) => {
  try {
    const newArtist = new Artist(req.body);
    const artistSaved = await newArtist.save();
    return res.status(201).json(artistSaved);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

//! READ
const getArtists = async (req, res, next) => {
  try {
    const allArtists = await Artist.find();
    return res.status(200).json(allArtists);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

//! UPDATE
const updateArtist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newArtist = new Artist(req.body);
    newArtist._id = id;
    // findByIdAndUpdate me va a devolver el dato ANTIGUO
    const up = await Artist.findByIdAndUpdate(id, newArtist, { new: true });
    return res.status(200).json(up);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

//! DELETE
const deleteArtist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const artistDeleted = await Artist.findByIdAndDelete(id);
    return res.status(200).json(artistDeleted);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

module.exports = {
  postArtist,
  getArtists,
  updateArtist,
  deleteArtist
};