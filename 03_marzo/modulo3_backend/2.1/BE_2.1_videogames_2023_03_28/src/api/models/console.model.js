const mongoose = require("mongoose");

const ConsoleSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  videogames: [{ type: mongoose.Schema.Types.ObjectId, ref: "Videogame" }],
});

const Console = mongoose.model("Console", ConsoleSchema);
module.exports = Console;
