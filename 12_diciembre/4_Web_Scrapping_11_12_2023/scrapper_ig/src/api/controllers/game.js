const Game = require("../models/game");
const games = require("../../../games.json");

const insertManyGames = async (req, res, next) => {
    try {
        await Game.insertMany(games.results);
        return res.status(201).json("Todos los juegos subidos a la BBDD");
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
}

const getAllGames = async (req, res, next) => {
    try {
        const allGames = await Game.find();
        return res.status(200).json(allGames);
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    insertManyGames,
    getAllGames
}