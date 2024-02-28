const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  shield: { type: String, required: true },
  name: { type: String, required: true },
  year: { type: String, required: true },
});

const Team = mongoose.model("teams", teamSchema, "teams");
module.exports = Team;