const mongoose = require("mongoose");

const foroSchema = new mongoose.Schema({
    img: { type: String, required: true, trim: true },
    name:  { type: String, required: true, trim: true },
    comments: [{ type: mongoose.Types.ObjectId, ref: "comments" }]
});

const Foro = mongoose.model("foros", foroSchema, "foros");
module.exports = Foro;