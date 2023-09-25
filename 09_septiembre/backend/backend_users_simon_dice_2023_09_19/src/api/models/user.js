const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
    {
        userName: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        password: { type: String, required: true },
        image: { type: String, required: true }
    }, 
    {
        collection: "users"
    }
);

userSchema.pre("save", function () {
    this.password = bcrypt.hashSync(this.password, 10);
})

const User = mongoose.model("users", userSchema, "users");
module.exports = User;