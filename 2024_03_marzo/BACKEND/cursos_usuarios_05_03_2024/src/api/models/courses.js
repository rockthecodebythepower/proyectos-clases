const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subjects: [{ type: mongoose.Types.ObjectId, ref: "subjects" }],
  price: { type: Number, required: true },
  img: { type: String, required: true },
});

const Course = mongoose.model("courses", courseSchema, "courses");
module.exports = Course;
