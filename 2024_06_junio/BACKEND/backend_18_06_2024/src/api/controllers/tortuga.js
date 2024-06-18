const Tortuga = require("../models/tortuga");

const getTortugas = async (req, res, next) => {
  try {
    const tortugas = await Tortuga.find();
    return res.status(200).json(tortugas);
  } catch (error) {
    return res.status(400).json("error haciendo el get");
  }
};

const createTortuga = async (req, res, next) => {
  try {
    console.log(req.body);
    const newTortuga = new Tortuga(req.body);
    const tortuga = await newTortuga.save();
    return res.status(201).json(tortuga);
  } catch (error) {
    return res.status(400).json("error haciendo el post");
  }
};

const deleteTortuga = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Tortuga.findByIdAndDelete(id);
    return res.status(201).json("tortuga eliminada");
  } catch (error) {
    return res.status(400).json("error haciendo el post");
  }
};

module.exports = { getTortugas, createTortuga, deleteTortuga };
