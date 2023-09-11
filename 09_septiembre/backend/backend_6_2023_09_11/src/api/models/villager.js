const mongoose = require("mongoose");

const villagerSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        image: {type: String, required: true},
        birthday: {type: String, required: true},
        status: {type: String, required: true, default: "normal"},
        animal: {type: String, required: true}
    }, 
    {
        collection: "villagers"
    }
);

const Villager = mongoose.model("villagers", villagerSchema, "villagers");
module.exports = Villager;