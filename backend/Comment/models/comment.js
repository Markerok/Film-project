const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  film: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Film',
  },
});

const CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = CommentModel;
