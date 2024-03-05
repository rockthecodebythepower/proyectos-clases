const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: Number, required: true, min: 1, max: 5 },
  },
  {
    timestamps: true,
    collection: "subjects",
  }
);

const Subject = mongoose.model("subjects", subjectSchema, "subjects");
module.exports = Subject;
