const Project = require("../models/projects");

const getProjects = async (req, res, next) => {

    try {
        
        const projects = await Project.find();
        return res.status(200).json(projects);

    } catch (error) {
        return res.status(400).json("Error")
    }

}

const postProject = async (req, res, next) => {

    try {
        
        const newProject = new Project(req.body);

        const projectDB = await newProject.save();

        return res.status(201).json(projectDB);

    } catch (error) {
        return res.status(400).json("Error")
    }

}


const getProjectById = async (req, res, next) => {

    try {
        
    } catch (error) {
        return res.status(400).json("Error")
    }

}

const deleteProject = async (req, res, next) => {

    try {

        const { id } = req.params;

        const deletedProject = await Project.findByIdAndDelete(id);

        return res.status(200).json(deletedProject);
        
    } catch (error) {
        return res.status(400).json("Error")
    }

}

module.exports = {
    getProjects,
    getProjectById,
    postProject,
    deleteProject
}