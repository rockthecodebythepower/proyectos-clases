const { isAdmin } = require("../../middlewares/auth");
const {
  getPlataformas,
  getPlataformaById,
  postPlataforma,
  putPlataforma,
  deletePlataforma,
} = require("../controllers/plataformas");

const plataformasRouter = require("express").Router();

plataformasRouter.get("/:id", getPlataformaById);
plataformasRouter.get("/", getPlataformas);
plataformasRouter.post("/", [isAdmin], postPlataforma);
plataformasRouter.put("/:id", [isAdmin], putPlataforma);
plataformasRouter.delete("/:id", [isAdmin], deletePlataforma);

module.exports = plataformasRouter;
