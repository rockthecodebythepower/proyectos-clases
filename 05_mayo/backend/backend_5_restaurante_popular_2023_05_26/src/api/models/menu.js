const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema(
  {
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    platos: [{type: mongoose.Types.ObjectId, ref: "platos"}],
    creador: {type: mongoose.Types.ObjectId, ref: "users"}
  },
  { collection: "menus" }
);

const Menu = mongoose.model("menus", MenuSchema);
module.exports = Menu;