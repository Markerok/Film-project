const CommentModel = require('../models/comment');

const create = async (req, res) => {
  const { comment, filmId, userId } = req.body;
  const createComment = await CommentModel.create({
    comment,
  });
  createComment.save();
  res.status(200).json(comment);
};

const readAll = async (req, res) => {
  const comments = await CommentModel.find({});
  res.status(200).json(comments);
};

exports.create = create;
exports.readAll = readAll;
