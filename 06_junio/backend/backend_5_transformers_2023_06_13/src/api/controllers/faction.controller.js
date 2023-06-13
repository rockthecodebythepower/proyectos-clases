const Faction = require("../models/faction.model");
const Transformer = require("../models/transformer.model");

const getAllFactions = async (req, res, next) => {
	try {
		const allFactions = await Faction.find().populate("members");
		return res.status(200).json(allFactions);
	} catch (error) {
		return next("Error getting factions", error);
	}
};

const getAutobots = async (req, res, next) => {
	try {
		const autobots = await Faction.findOne({name: "Autobots"}).populate("members");
		return res.status(200).json(autobots);
	} catch (error) {
		return next("Error finding autobots", error);
	}
};

const getDecepticons = async (req, res, next) => {
	try {
		const decepticons = await Faction.findOne({name: "Decepticons"}).populate("members");
		return res.status(200).json(decepticons);
	} catch (error) {
		return next("Error finding decepticons", error);
	}
};

const createFaction = async (req, res, next) => {
	try {
		const newFaction = new Faction(req.body);
		await newFaction.save();
		return res.status(201).json(newFaction);
	} catch (error) {
		return next("Error creating faction", error);
	}
};

const deleteFaction = async (req, res, next) => {
	try {
		const {id} = req.params;
		await Faction.findByIdAndDelete(id);
		return res.status(200).json("Faction deleted");
	} catch (error) {
		return next("Error deleting faction", error);
	}
};

module.exports = {getAllFactions, createFaction, deleteFaction, getAutobots, getDecepticons};
