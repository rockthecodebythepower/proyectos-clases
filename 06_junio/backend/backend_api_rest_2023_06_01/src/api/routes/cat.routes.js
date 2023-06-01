//Importamos express para crear un router
const express = require("express");
//Importamos los controladores
const {getAllCats, createCat} = require("../controllers/cat.controller");

//Creamos un router
const CatRouter = express.Router();

CatRouter.get("/", getAllCats);
CatRouter.post("/", createCat);

module.exports = CatRouter;
