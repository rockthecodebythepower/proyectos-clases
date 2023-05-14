const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
  {
    record: { type: String, required: true, trim: true },
    nombre: { type: String, required: true, unique: true, trim: true },
  },
  {
    collection: "records",
    timestamps: true,
  }
);

const Record = mongoose.model("records", recordSchema);
module.exports = Record;