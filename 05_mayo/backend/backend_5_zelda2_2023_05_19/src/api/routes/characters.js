//! estamos importando todas las funciones o controladores que queramos ejecutar para conseguir la información o cambiarla o lo que sea
const { getCharacters, postCharacter, filterCharactersByStars } = require("../controllers/characters");

//! creación del enrutado de express
const characterRoutes = require("express").Router();

//? nuestro primer endpoint http://localhost:3000/api/v1/characters/
characterRoutes.get("/", getCharacters);

characterRoutes.get("/:stars", filterCharactersByStars)

characterRoutes.post("/", postCharacter)

//* exportamos el enrutado para que pueda ser utilizado
module.exports = characterRoutes;