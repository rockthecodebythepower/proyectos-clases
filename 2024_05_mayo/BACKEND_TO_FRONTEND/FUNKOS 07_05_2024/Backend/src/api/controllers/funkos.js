const Funko = require("../models/funkos")

const getFunkos = async (req, res, next) => {
    try {
        const funkos = await Funko.find();
        return res.status(200).json(funkos);
    } catch (error) {
        return res.status(400).json("Error en el get de los funkos");
    }
}

module.exports = { getFunkos }