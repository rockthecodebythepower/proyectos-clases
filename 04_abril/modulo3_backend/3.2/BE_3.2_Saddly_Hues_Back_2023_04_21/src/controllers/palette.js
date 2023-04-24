const Palette = require("../models/palette");

const getAllPalettes = async (req, res, next) => {
  try {

    const palettes = await Palette.find();
    return res.json(palettes);

  } catch (error) {
    return res.json("error cogiendo las paletas")
  }
};

module.exports = { getAllPalettes };
