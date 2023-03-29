const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    userName: {type: String, trim: true, required: true, unique: true},
    password: {type: String, trim: true, required: true},
    photo: {type: String, trim: true, required: true},
    DNI: {type: String, trim: true, required: false}
}, {
    timestamps: true, collection: "users"
})

userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

const User = mongoose.model("users", userSchema);
module.exports = User;