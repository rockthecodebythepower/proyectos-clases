const mongoose = require("mongoose");

const kioskoSchema = new mongoose.Schema(
  {
    ciudad: {
      type: String,
      enum: ["Valencia", "Madrid", "Barcelona", "Toledo"],
      trim: true,
      required: true,
    },
    CP: { type: Number, trim: true, required: true },
    nombre: { type: String, trim: true, required: true, unique: true },
    productos: [{ type: mongoose.Types.ObjectId, ref: "productos" }],
  },
  { timestamps: true, collection: "kioskos" }
);

const Kiosko = mongoose.model("kioskos", kioskoSchema);
module.exports = Kiosko;
