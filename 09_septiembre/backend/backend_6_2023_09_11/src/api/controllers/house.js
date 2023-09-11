const House = require("../models/house");

const postHouse = async (req, res, next) => {

    try {
        
        const newHouse = new House(req.body);
        const house = await newHouse.save();
        return res.status(201).json(house);

    } catch (error) {
        return res.status(400).json("error");
    }

}

const getAllHouses = async (req, res, next) => {
    try {
        
        const houses = await House.find();

        return res.status(200).json(houses);

    } catch (error) {
        return res.status(400).json("error");
    }
}

const getHouse = async (req, res, next) => {
    try {

        const { id } = req.params;

        const house = await House.findById(id).populate("villagers");

        return res.status(200).json(house);

    } catch (error) {
        return res.status(400).json("error");
    }
}

module.exports = { getAllHouses, getHouse, postHouse }