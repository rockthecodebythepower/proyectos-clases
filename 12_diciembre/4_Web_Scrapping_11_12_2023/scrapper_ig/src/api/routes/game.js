const { insertManyGames, getAllGames } = require("../controllers/game");

const gamesRouter = require("express").Router();

gamesRouter.post("/robar_a_instant_gaming", insertManyGames);
gamesRouter.get("/", getAllGames);

module.exports = gamesRouter;