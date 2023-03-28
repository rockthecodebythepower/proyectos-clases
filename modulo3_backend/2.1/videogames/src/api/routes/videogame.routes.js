const express = require("express");
const VideogamesRouter = express.Router();

const {
  getAllVideogames,
  getVideogameByID,
  createVideogame,
  updateVideogame,
  deleteVideogame,
} = require("../controllers/videogame.controllers");

VideogamesRouter.get("/", getAllVideogames);
VideogamesRouter.get("/:id", getVideogameByID);
VideogamesRouter.post("/", createVideogame);
VideogamesRouter.put("/:id", updateVideogame);
VideogamesRouter.delete("/:id", deleteVideogame);

module.exports = VideogamesRouter;
