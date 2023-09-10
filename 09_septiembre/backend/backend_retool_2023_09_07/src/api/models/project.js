const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

}, {collection: "projects"})

const Project = mongoose.model("projects", projectSchema, "projects");
module.exports = Project;