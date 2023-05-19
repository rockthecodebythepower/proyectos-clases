const Show = require("../models/show.model");

const getAllShows = async (req, res, next) => {
	try {
		const shows = await Show.find().populate("cast");
		return res.status(200).json(shows);
	} catch (error) {
		return next("Error finding shows", error);
	}
};

const createShow = async (req, res, next) => {
	try {
		const newShow = new Show(req.body);
		const createdShow = await newShow.save();
		return res.status(201).json(createdShow);
	} catch (error) {
		return next("Error creating show", error);
	}
};

module.exports = {getAllShows, createShow};
