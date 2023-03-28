const Console = require("../models/console.model");

const getAllConsoles = async (req, res, next) => {
  try {
    const consoles = await Console.find().populate("videogames");
    return res.status(200).json(consoles);
  } catch (error) {
    return next(error);
  }
};

const getConsoleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const console = await Console.findById(id).populate("videogames");
    return res.status(200).json(console);
  } catch (error) {
    return next(error);
  }
};

const createConsole = async (req, res, next) => {
  try {
    const newConsole = new Console(req.body);
    const createdConsole = await newConsole.save();
    return res.status(201).json(createdConsole);
  } catch (error) {
    return next(error);
  }
};

const updateConsole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedConsole = await Console.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedConsole);
  } catch (error) {
    return next(error);
  }
};

const deleteConsole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedConsole = await Console.findByIdAndDelete(id);
    return res.status(200).json(deletedConsole);
  } catch (error) {
    return next(error);
  }
};

const addVideogame = async (req, res, next) => {
  try {
    const { consoleId } = req.body;
    const { videogameId } = req.body;
    const updatedConsole = await Console.findByIdAndUpdate(
      consoleId,
      {
        $push: { videogames: videogameId },
      },
      { new: true }
    );
    return res.status(200).json(updatedConsole);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllConsoles,
  getConsoleById,
  createConsole,
  updateConsole,
  deleteConsole,
  addVideogame,
};
