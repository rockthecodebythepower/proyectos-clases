const { setError } = require("../config/error");
const Mesa = require("../models/mesa");


const getMesas = async (req, res, next) => {

    try {

        const mesas = await Mesa.find();
        return res.status(200).json(mesas);

    } catch (error) {
        return next(setError(400, error))
    }

}

const getMesaById = async (req, res, next) => {

    try {

        const { id } = req.params;

        const mesa = await Mesa.findById(id);
        
        return res.status(200).json(mesa);

    } catch (error) {
        return next(setError(400, error))
    }

}

const postMesa = async (req, res, next) => {

    try {
        
        const mesa = new Mesa(req.body);

        const newMesa = await mesa.save();
       
        return res.status(200).json(newMesa);

    } catch (error) {
        return next(setError(400, "No se ha podido crear la mesa"))
    }

}

const putMesa = async (req, res, next) => {

    try {
       
        const { id } = req.params;

        const mesaModify = new Mesa(req.body);

        mesaModify._id = id;

        const updatedMesa = await Mesa.findByIdAndUpdate(id, mesaModify, {new: true});

        return res.status(200).json(updatedMesa);

    } catch (error) {
        return next(setError(400, error))
    }

}

const deleteMesa = async (req, res, next) => {

    try {
       
        const { id } = req.params;

        const deletedMesa = await Mesa.findByIdAndDelete(id);

        return res.status(200).json(deletedMesa);

    } catch (error) {
        return next(setError(400, error))
    }

}

module.exports = {
    getMesas,
    postMesa,
    getMesaById,
    putMesa,
    deleteMesa
}