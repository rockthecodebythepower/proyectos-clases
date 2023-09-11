const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        image: { type: String, required: true },
        villagers: [{ type: mongoose.Types.ObjectId, ref: "villagers" }]
    },
    {
        collection: "houses"
    }
);

const House = mongoose.model("houses", houseSchema, "houses");
module.exports = House;