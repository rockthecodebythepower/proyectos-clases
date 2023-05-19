const express = require("express");

const {getAllShows, createShow} = require("../controllers/show.controllers");

const ShowRouter = express.Router();

ShowRouter.get("/", getAllShows);
ShowRouter.post("/", createShow);

module.exports = ShowRouter;
