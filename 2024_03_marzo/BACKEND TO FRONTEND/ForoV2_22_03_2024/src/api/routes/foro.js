const { isAuth, isAdmin } = require("../../middlewares/Auth");
const { postForo, addCommentToForo, getForos, getForoById } = require("../controllers/foro");

const foroRouter = require("express").Router();

foroRouter.post("/", isAuth, isAdmin, postForo);
foroRouter.put("/:id/:idComment", isAuth, addCommentToForo);
foroRouter.get("/", isAuth, getForos);
foroRouter.get("/:id", isAuth, getForoById);

module.exports = foroRouter;