const Team = require("../models/team")

const getTeams = async (req, res, next) => {
    try {
        const teams = await Team.find();
        return res.status(200).json(teams);
    } catch (error) {
        return res.status(400).json("error")
    }
}

const getTeamById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const team = await Team.findById(id);
        return res.status(200).json(team);
    } catch (error) {
        return res.status(400).json("error")
    }
}

const postTeam = async (req, res, next) => {
    try {
        const newTeam = new Team(req.body);

        if (req.file) {
            newTeam.shield = req.file.path;
        }

        const teamSaved = await newTeam.save();
        return res.status(201).json(teamSaved);
    } catch (error) {
        return res.status(400).json("error")
    }
}

const deleteTeam = async (req, res, next) => {
    try {
        const { id } = req.params;
        const team = await Team.findByIdAndDelete(id);
        return res.status(200).json(team);
    } catch (error) {
        return res.status(400).json("error")
    }
}

module.exports = {
    getTeams,
    getTeamById,
    postTeam,
    deleteTeam
}