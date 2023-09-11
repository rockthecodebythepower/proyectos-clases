const villagers = require("../../data/villager");
const Villager = require("../models/villager");

const reloadVillagers = async (req, res, next) => {

    try {
        await Villager.collection.drop();
        console.log("colección eliminada");

        await Villager.insertMany(villagers);

        return res.status(201).json("Los villagers han respawnmeado")
    } catch (error) {
        
    }

}

module.exports = {
    reloadVillagers
}