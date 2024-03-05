const { postSubject, deleteSubject } = require("../controllers/subjects");
const subjectRouter = require("express").Router();

subjectRouter.post("/", postSubject);
subjectRouter.delete("/:id", deleteSubject);

module.exports = subjectRouter;