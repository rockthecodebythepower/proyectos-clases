const mongoose = require("mongoose");

const adoptionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    cat: { type: mongoose.Types.ObjectId, ref: "cats", required: true },
    message: { type: String, required: true },
    approved: { type: Boolean, default: false, required: true }
  },
  {
    collection: "adoptions",
    timestamps: true,
  }
);

const Adoption = mongoose.model("adoptions", adoptionSchema, "adoptions");
module.exports = Adoption;