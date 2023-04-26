const express = require("express");

const ConsolesRouter = express.Router();

const {
  getAllConsoles,
  getConsoleById,
  createConsole,
  updateConsole,
  deleteConsole,
  addVideogame,
} = require("../controllers/console.controllers");

ConsolesRouter.get("/", getAllConsoles);
ConsolesRouter.get("/:id", getConsoleById);
ConsolesRouter.post("/", createConsole);
ConsolesRouter.put("/update/:id", updateConsole);
ConsolesRouter.delete("/:id", deleteConsole);
ConsolesRouter.put("/add-videogame", addVideogame);

module.exports = ConsolesRouter;
