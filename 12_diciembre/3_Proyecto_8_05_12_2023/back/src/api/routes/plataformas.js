const { isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
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
plataformasRouter.post("/", [isAdmin], upload.single("imagen"), postPlataforma);
plataformasRouter.put(
  "/:id",
  [isAdmin],
  upload.single("imagen"),
  putPlataforma
);
plataformasRouter.delete("/:id", [isAdmin], deletePlataforma);

module.exports = plataformasRouter;
