const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
  filmID: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  body: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const FilmModel = mongoose.model('Film', FilmSchema);

module.exports = FilmModel;
