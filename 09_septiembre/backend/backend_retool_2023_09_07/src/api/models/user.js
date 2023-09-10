const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

// el schema es para detallar que datos deben tener los usuarios y como;
const userSchema = new mongoose.Schema({
    email: { type: "String", required: true },
    password: { type: "String", required: true },
    /* projects: [{ type: mongoose.Types.ObjectId, ref: "projects" }], */
    rol: { type: "String", required: true, enum: ["admin", "user"], default: "user" }
}, {collection: "users"})


userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

// la función flecha permite retornar algo sin poner return si no pones las llaves
// dentro de la función flecha el this. hace referencia a cosas que estén dentro de la propia función
// la función normal me permite utilizar el this. para acceder a variables externas

const User = mongoose.model("users", userSchema, "users");
module.exports = User;