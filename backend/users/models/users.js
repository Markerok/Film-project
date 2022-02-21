const mongoose = require('mongoose');

const Users = new mongoose.Schema({
  username: {
    type: String,
    minlength: 4,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  roles: [
    {
      type: String,
      ref: 'Role',
    },
  ],
});

const UsersModel = mongoose.model('User', Users);
module.exports = UsersModel;
