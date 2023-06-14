const { upload } = require("../../middlewares/file");
const { getCharacters, postCharacter, deleteCharacter } = require("../controllers/characters");

const charactersRoutes = require("express").Router();

charactersRoutes.get("/", getCharacters);
charactersRoutes.post("/", upload.single("image"), postCharacter);
charactersRoutes.delete("/:id", deleteCharacter);

module.exports = charactersRoutes;