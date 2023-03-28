const Videogame = require("../models/videogame.model");

const getAllVideogames = async (req, res, next) => {
  try {
    const videogames = await Videogame.find();
    return res.status(200).json(videogames);
  } catch (error) {
    return next(error);
  }
};

const getVideogameByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const videogame = await Videogame.findById(id);
    return res.status(200).json(videogame);
  } catch (error) {
    return next(error);
  }
};

const createVideogame = async (req, res, next) => {
  try {
    const newVideogame = new Videogame(req.body);
    const createdVideogame = await newVideogame.save();
    return res.status(201).json(createdVideogame);
  } catch (error) {
    return next(error);
  }
};

const updateVideogame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedVideogame = await Videogame.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedVideogame);
  } catch (error) {
    return next(error);
  }
};

const deleteVideogame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedVideogame = await Videogame.findByIdAndDelete(id);
    return res.status(200).json(deletedVideogame);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllVideogames,
  getVideogameByID,
  createVideogame,
  updateVideogame,
  deleteVideogame,
};
