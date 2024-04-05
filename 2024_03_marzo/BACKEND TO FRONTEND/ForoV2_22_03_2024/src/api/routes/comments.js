const { isAuth } = require("../../middlewares/Auth");
const { postComment, /* getComments */ } = require("../controllers/comments");

const commentsRouter = require("express").Router();

commentsRouter.post("/", isAuth, postComment);
/* commentsRouter.get("/", getComments); */

module.exports = commentsRouter;