const { isAuth } = require("../../middlewares/auth");
const { createAdoption } = require("../controllers/adoption");
const adoptionsRouter = require("express").Router();

adoptionsRouter.post("/", isAuth, createAdoption);

module.exports = adoptionsRouter;