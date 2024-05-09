const { getCats } = require("../controllers/cat");
const catsRouter = require("express").Router();

catsRouter.get("/", getCats);

module.exports = catsRouter;