const { isAuth, isAdmin } = require("../../middlewares/auth");
const {
  getJuegos,
  getJuegoById,
  getJuegosByCategory,
  getJuegosByPrice,
  postJuego,
  putJuego,
  deleteJuego,
  getJuegosAdmin,
} = require("../controllers/juegos");

const juegosRouter = require("express").Router();

juegosRouter.get("/not-verified", [isAdmin], getJuegosAdmin);
juegosRouter.get("/precio/:precio", getJuegosByPrice);
juegosRouter.get("/categoria/:categoria", getJuegosByCategory);
juegosRouter.get("/:id", getJuegoById);
juegosRouter.get("/", getJuegos);
juegosRouter.post("/", [isAuth], postJuego);
juegosRouter.put("/:id", [isAdmin], putJuego);
juegosRouter.delete("/:id", [isAdmin], deleteJuego);

module.exports = juegosRouter;