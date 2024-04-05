const Comment = require("../models/comments");

const postComment = async (req, res, next) => {
  try {
    const newComment = new Comment(req.body);
    const comment = await newComment.save();
    return res.status(201).json(comment);
  } catch (error) {
    return res.status(400).json("error");
  }
};

/* const getComments = async (req, res, next) => {
    try {
      const comments = await Comment.find();
      return res.status(200).json(comments);
    } catch (error) {
      return res.status(400).json("error");
    }
  };
   */

module.exports = {
  postComment,
  /* getComments */
};
