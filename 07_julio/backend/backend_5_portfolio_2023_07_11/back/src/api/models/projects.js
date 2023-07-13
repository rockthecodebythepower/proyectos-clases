const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    img: { type: String, trim: true, required: true },
    date: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    url: { type: String, trim: true, required: true },
  },
  {
    collection: "projects"
  }
);

const Project = mongoose.model("projects", projectSchema, "projects");
module.exports = Project;