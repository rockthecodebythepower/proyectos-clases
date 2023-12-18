const {
  getImages,
  createImage,
  deleteImage,
} = require("../controllers/image.controller");
const upload = require("../../middlewares/file");
const express = require("express");

const ImageRouter = express.Router();

ImageRouter.get("/", getImages);
ImageRouter.post("/", upload.fields([{ name: "url" }]), createImage);
ImageRouter.delete("/:id", deleteImage);

module.exports = ImageRouter;
