const express = require("express");
const { getAlbums, createAlbum, deleteAlbum } = require("../controllers/album.controller");

const AlbumRoutes = express.Router();
AlbumRoutes.get("/", getAlbums);
AlbumRoutes.post("/", createAlbum);
AlbumRoutes.delete("/:id", deleteAlbum)

module.exports = AlbumRoutes;
