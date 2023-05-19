const express = require("express");

const {
	getAllActors,
	createActor,
	updateActor,
	deleteActor,
} = require("../controllers/actor.controllers");

const ActorRouter = express.Router();

ActorRouter.get("/", getAllActors);
ActorRouter.post("/", createActor);
ActorRouter.patch("/:id", updateActor);
ActorRouter.delete("/:id", deleteActor);

module.exports = ActorRouter;
