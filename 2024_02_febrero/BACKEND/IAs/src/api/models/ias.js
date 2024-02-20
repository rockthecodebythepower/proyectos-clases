const mongoose = require("mongoose");

const iasSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    organization: { type: String, required: true },
    video: { type: String, required: false },
    category: { type: String, required: true },
  },
  {
    collection: "ias",
  }
);

const IAS = mongoose.model("ias", iasSchema, "ias");
module.exports = IAS;