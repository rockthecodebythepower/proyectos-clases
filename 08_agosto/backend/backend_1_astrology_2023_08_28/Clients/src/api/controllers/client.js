const Client = require("../models/client");

const createClient = async (req, res, next) => {
    
    try {
        
        const newClient = new Client(req.body);

        const clientSaved = await newClient.save();

        return res.status(201).json(clientSaved);

    } catch (error) {
        return res.status(400).json("Error creando cliente")
    }

}

const getClients = async (req, res, next) => {

    try {
        
        const clientes = await Client.find();

        return res.status(200).json(clientes);

    } catch (error) {
        return res.status(400).json("Error recogiendo datos")
    }

}

const getClientById = async (req, res, next) => {

    try {
        
    } catch (error) {
        
    }

}

const updateClient = async (req, res, next) => {

    try {
        
    } catch (error) {
        
    }

}

const deleteClient = async (req, res, next) => {

    try {
        
    } catch (error) {
        
    }

}

module.exports = {
    createClient,
    getClientById,
    getClients,
    updateClient,
    deleteClient
}