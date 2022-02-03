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
  roles: [
    {
      type: String,
      ref: 'Role',
    },
  ],
});

const UsersModel = mongoose.model('Users', Users);
module.exports = UsersModel;
