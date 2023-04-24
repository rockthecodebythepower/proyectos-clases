const mongoose = require("mongoose");

const mesaSchema = new mongoose.Schema(
  {
    numero: {type: Number, required: true},
    capacidad: {type: Number, required: true}
  },
  { timestamps: true, collection: "mesas" }
);

const Mesa = mongoose.model("mesas", mesaSchema);
module.exports = Mesa;