const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true, trim: true },
    user: { type: mongoose.Types.ObjectId, required: true, ref: "users" }
});

const Comment = mongoose.model("comments", commentSchema, "comments");
module.exports = Comment;