const Course = require("../models/courses");

const postCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    const course = await newCourse.save();
    return res.status(201).json(course);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const oldCourse = await Course.findById(id);
    const newCourse = new Course(req.body);

    newCourse._id = id;

    newCourse.subjects = [...oldCourse.subjects, ...newCourse.subjects];

    const course = await Course.findByIdAndUpdate(id, newCourse, { new: true });
    return res.status(201).json(course);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const getCourses = async (req, res) => {
  try {
    console.log(req.user.rol);
    const courses = await Course.find().populate("subjects");
    return res.status(201).json(courses);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    return res.status(200).json("eliminado");
  } catch (error) {
    return res.status(400).json("error");
  }
};

module.exports = { postCourse, updateCourse, getCourses, deleteCourse };
