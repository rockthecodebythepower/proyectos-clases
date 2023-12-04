const upload = require("../../middlewares/file");
const { getMemes, postMeme, deleteMeme } = require("../controllers/meme");
const memesRouter = require("express").Router();

memesRouter.get("/", getMemes);
memesRouter.post(
  "/",
  upload.fields([{ name: "img" }]),
  postMeme
);
memesRouter.delete("/:id", deleteMeme);

module.exports = memesRouter;

/* upload.fields([{ name: "img" }, { name: "img2" }]) */
/* upload.single("img"); */