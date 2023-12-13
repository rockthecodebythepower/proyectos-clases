const { isAuth } = require("../../middlewares/auth");
const { getLibros, getLibroById, postLibro, updateLibro, deleteLibro } = require("../controllers/libro");

const librosRouter = require("express").Router();

librosRouter.get("/", getLibros);
librosRouter.get("/:id", getLibroById);
librosRouter.post("/", isAuth, postLibro);
librosRouter.put("/:id", isAuth, updateLibro);
librosRouter.delete("/:id", isAuth, deleteLibro);

module.exports = librosRouter;