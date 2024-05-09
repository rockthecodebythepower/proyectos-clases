const Cat = require("../models/cat");

const getCats = async (req, res, next) => {
    try {
        const cats = await Cat.find();
        return res.json(cats);
    } catch (error) {
        return res.status(400).json("error");
    }
}


module.exports = {
    getCats
}