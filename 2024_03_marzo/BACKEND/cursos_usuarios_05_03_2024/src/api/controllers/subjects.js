const Course = require("../models/courses");
const Subject = require("../models/subjects");

const postSubject = async (req, res) => {
  try {
    const newSubject = new Subject(req.body);
    const subject = await newSubject.save();
    return res.status(201).json(subject);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const courses = await Course.find({ subjects: { $in: id } });

    for (const course of courses) {
        const indexof = course.subjects.indexOf(id);
        const courseUpdate = course;
        courseUpdate.subjects.splice(indexof, 1);
        await Course.findByIdAndUpdate(course._id, courseUpdate);
    }

    await Subject.findByIdAndDelete(id);
    return res.status(200).json("eliminado");
  } catch (error) {
    return res.status(400).json("error");
  }
};

module.exports = { postSubject, deleteSubject };
