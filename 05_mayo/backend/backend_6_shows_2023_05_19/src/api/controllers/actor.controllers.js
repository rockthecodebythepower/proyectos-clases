const Actor = require("../models/actor.model");

const getAllActors = async (req, res, next) => {
	try {
		const actors = await Actor.find();
		return res.status(200).json(actors);
	} catch (error) {
		return next("Actors not found", error);
	}
};

const createActor = async (req, res, next) => {
	try {
		const newActor = new Actor(req.body);
		const createdActor = await newActor.save();
		return res.status(201).json(createdActor);
	} catch (error) {
		return next("Error creating actor", error);
	}
};

const updateActor = async (req, res, next) => {
	try {
		const {id} = req.params;
		const newActor = new Actor(req.body);
		newActor._id = id;
		await Actor.findByIdAndUpdate(id, newActor);
		return res.status(200).json("Actor updated!");
	} catch (error) {
		return next("Error updating actor", error);
	}
};

const deleteActor = async (req, res, next) => {
	try {
		const {id} = req.params;
		await Actor.findByIdAndDelete(id);
		return res.status(200).json("Actor deleted!");
	} catch (error) {
		return next("Error deleting actor", error);
	}
};

module.exports = {getAllActors, createActor, updateActor, deleteActor};
