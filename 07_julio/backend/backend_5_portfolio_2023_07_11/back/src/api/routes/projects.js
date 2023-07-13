const { getProjects, getProjectById, postProject, deleteProject } = require("../controllers/projects");
const projectRoutes = require("express").Router();

projectRoutes.get("/", getProjects);
projectRoutes.get("/:id", getProjectById);
projectRoutes.post("/", postProject);
projectRoutes.delete("/:id", deleteProject);

module.exports = projectRoutes;