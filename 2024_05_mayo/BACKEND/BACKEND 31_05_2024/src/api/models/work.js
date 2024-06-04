const mongoose = require("mongoose");

const workSchema = new mongoose.Schema(
  {
    address: { type: String, required: true },
    location: { type: String, required: true },
    registers: [{ type: mongoose.Types.ObjectId, ref: "registers" }]
  },
  {
    timestamps: true,
  }
);

const Work = mongoose.model("works", workSchema, "works");
module.exports = Work;