const { isAuth } = require("../../middlewares/auth");
const { postCourse, updateCourse, getCourses, deleteCourse } = require("../controllers/courses");
const courseRouter = require("express").Router();

courseRouter.post("/", postCourse);
courseRouter.put("/:id", updateCourse);
courseRouter.get("/", isAuth, getCourses);
courseRouter.delete("/:id", deleteCourse);

module.exports = courseRouter;