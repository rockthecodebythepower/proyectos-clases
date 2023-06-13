const express = require("express");
const {
	getAllFactions,
	createFaction,
	deleteFaction,
	getAutobots,
	getDecepticons,
} = require("../controllers/faction.controller");

const FactionRouter = express.Router();

FactionRouter.get("/", getAllFactions);
FactionRouter.get("/autobots", getAutobots);
FactionRouter.get("/decepticons", getDecepticons);
FactionRouter.post("/", createFaction);
FactionRouter.delete("/:id", deleteFaction);

module.exports = FactionRouter;
