const Entertainment = require("../models/entertainment");

const postEntertainment = async (req, res, next) => {
    try {
        const newEntretainment = new Entertainment(req.body);
        const entertainmentSaved = await newEntretainment.save();
        return res.status(201).json(entertainmentSaved);
    } catch (error) {
        return res.status(400).json(error)
    }
}

const getEntertainments = async (req, res, next) => {
    try {
        const entertainments = await Entertainment.find().sort({ release_year: -1 });
        return res.status(200).json(entertainments);
    } catch (error) {
        return res.status(400).json("error")
    }
}

const updateEntertainment = async (req, res, next) => {
    try {
        const newEntretainment = new Entertainment(req.body);
        const { id } = req.params;

        newEntretainment._id = id;

        const entertainmentUpdated = await Entertainment.findByIdAndUpdate(id, newEntretainment, { new: true });

        return res.status(200).json(entertainmentUpdated);
    } catch (error) {
        return res.status(400).json("error")
    }
}

const getEntertainmentById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const entertainment = await Entertainment.findById(id);
        return res.status(200).json(entertainment);
    } catch (error) {
        return res.status(400).json("error")
    }
}

const getEntertainmentsReleaseYear = async (req, res, next) => {
    try {
        const { year } = req.params;

        const entertainments = await Entertainment.find({ release_year: year });

        return res.status(200).json(entertainments);

    } catch (error) {
        return res.status(400).json("error")
    }
}

const deleteEntertainment = async (req, res, next) => {
    try {
        const { id } = req.params;
        const entertainmentDeleted = await Entertainment.findByIdAndDelete(id);
        return res.status(200).json(entertainmentDeleted);
    } catch (error) {
        return res.status(400).json("error")
    }
}

module.exports = {
    postEntertainment,
    getEntertainments,
    getEntertainmentById,
    getEntertainmentsReleaseYear,
    deleteEntertainment,
    updateEntertainment
}