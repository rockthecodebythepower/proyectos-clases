const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
  {
    hours: { type: Number, required: true },
    date: { type: String, required: true },
    worker: { type: mongoose.Types.ObjectId, ref: "workers", required: true },
    work: { type: mongoose.Types.ObjectId, ref: "works", required: true }
  },
  {
    timestamps: true,
  }
);

const Register = mongoose.model("registers", registerSchema, "registers");
module.exports = Register;
