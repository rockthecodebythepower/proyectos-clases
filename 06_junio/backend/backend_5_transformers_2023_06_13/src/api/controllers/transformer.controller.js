const Transformer = require("../models/transformer.model");

const getAllTransformers = async (req, res, next) => {
	try {
		const allTransformers = await Transformer.find();
		return res.status(200).json(allTransformers);
	} catch (error) {
		return next("Error getting transformers", error);
	}
};

const getTransformerByName = async (req, res, next) => {
	try {
		const {name} = req.params;
		const foundTransformer = await Transformer.findOne({name: name});
		if (foundTransformer) {
			return res.status(200).json(foundTransformer);
		} else {
			return res.status(500).json("Transformer not found");
		}
	} catch (error) {
		return next("Error finding transformer", error);
	}
};

const getTransformersSorted = async (req, res, next) => {
	try {
		const allTransformers = await Transformer.find().sort({name: 1});
		return res.status(200).json(allTransformers);
	} catch (error) {
		return next("Error sorting transformers", error);
	}
};

const createTransfomer = async (req, res, next) => {
	try {
		const newTransfomer = new Transformer(req.body);
		await newTransfomer.save();
		return res.status(201).json(newTransfomer);
	} catch (error) {
		return next("Error creating transformer", error);
	}
};

const deleteTransformer = async (req, res, next) => {
	try {
		const {id} = req.params;
		await Transformer.findByIdAndDelete(id);
		return res.status(200).json("Transfomer deleted");
	} catch (error) {
		return next("Error deleting tranformer", error);
	}
};

const updateTransformer = async (req, res, next) => {
	try {
		const {id} = req.params;
		const newTransfomer = new Transformer(req.body);
		newTransfomer._id = id;
		await Transformer.findByIdAndUpdate(id, newTransfomer);
		return res.status(200).json(newTransfomer);
	} catch (error) {
		return next("Error updating transformer", error);
	}
};

module.exports = {
	getAllTransformers,
	createTransfomer,
	deleteTransformer,
	updateTransformer,
	getTransformerByName,
	getTransformersSorted,
};
