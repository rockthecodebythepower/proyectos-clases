//Importamos el modelo
const Cat = require("../models/cat.model");

const getAllCats = async (req, res, next) => {
	try {
		const allCats = await Cat.find();
		return res.json(allCats);
	} catch (error) {
		return next(error);
	}
};

const createCat = async (req, res, next) => {
	try {
		const newCat = new Cat(req.body);
		await newCat.save();
		return res.json("Cat created!");
	} catch (error) {
		return next(error);
	}
};

module.exports = {getAllCats, createCat};
