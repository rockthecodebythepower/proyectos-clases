const mongoose = require("mongoose");

const tortugaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  weight: { type: Number, required: true },
  race: { type: String, required: true },
  habitat: { type: String, required: true },
});

const Tortuga = mongoose.model("tortugas", tortugaSchema, "tortugas");
module.exports = Tortuga;