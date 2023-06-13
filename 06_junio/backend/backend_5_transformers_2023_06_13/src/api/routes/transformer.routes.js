const express = require("express");
const {
	getAllTransformers,
	createTransfomer,
	deleteTransformer,
	updateTransformer,
	getTransformerByName,
	getTransformersSorted,
} = require("../controllers/transformer.controller");

const TransformerRouter = express.Router();

TransformerRouter.get("/", getAllTransformers);
TransformerRouter.get("/name/:name", getTransformerByName);
TransformerRouter.get("/sorted", getTransformersSorted);
TransformerRouter.post("/", createTransfomer);
TransformerRouter.patch("/:id", updateTransformer);
TransformerRouter.delete("/:id", deleteTransformer);

module.exports = TransformerRouter;
