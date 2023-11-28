const { getArtists, postArtist, deleteArtist, updateArtist } = require("../controllers/artists.js");

const artistsRoutes = require("express").Router();

artistsRoutes.get("/", getArtists);
artistsRoutes.post("/", postArtist);
artistsRoutes.put("/:id", updateArtist);
artistsRoutes.delete("/:id", deleteArtist);

module.exports = artistsRoutes;