const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    active: { type: Boolean, default: true },
    number: { type: Number, required: true },
    hoursPerDay: { type: Number },
    extraHoursPerMonth: { type: Number },
    extraHoursPastMonth: { type: Number },
    registers: [{ type: mongoose.Types.ObjectId, ref: "registers" }]
  },
  {
    timestamps: true,
  }
);

const Worker = mongoose.model("workers", workerSchema, "workers");
module.exports = Worker;
