const shelvingRouter = require("express").Router();
const { postShelving, getShelvings } = require("../controllers/shelving");


shelvingRouter.post("/", postShelving);
shelvingRouter.get("/", getShelvings);

module.exports = shelvingRouter;