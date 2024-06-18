const Marvel = require("../models/marvel");

const createMarvel = async (req, res, next) => {
  try {
    const newMarvel = new Marvel(req.body);
    const marvel = await newMarvel.save();
    return res.status(201).json(marvel);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const getMarvel = async (req, res, next) => {
  try {
    const marvels = await Marvel.find();
    return res.status(200).json(marvels);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const updateMarvel = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newMarvel = new Marvel(req.body);
    newMarvel._id = id;

    const marvelUpdated = await Marvel.findByIdAndUpdate(id, newMarvel, {
      new: true,
    });

    return res.status(200).json(marvelUpdated);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const deleteMarvel = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Marvel.findByIdAndDelete(id);
    return res.status(200).json("Se ha eliminado el personaje")
  } catch (error) {
    return res.status(400).json("error");
  }
};

module.exports = { createMarvel, getMarvel, updateMarvel, deleteMarvel };

//! CRUD
//? CREATE
//? READ
//? UPDATE
//? DELETE
