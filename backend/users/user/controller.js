const UsersModel = require('../models/users');
const RoleModel = require('../../role/models/role');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const create = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Error', errors });
  }

  const { username, email, password } = req.body;
  const { value } = req.body;
  const candidate = await UsersModel.findOne({ username });
  const emailCandidate = await UsersModel.findOne({ email });

  if (candidate) {
    return res.status(400).json({ message: 'Username is already registry' });
  } else if (emailCandidate) {
    return res.status(400).json({ message: 'Email is already registry' });
  } else {
    const hashPassword = bcrypt.hashSync(password, 7);
    const userRole = await RoleModel.findOne({ value: 'user' });
    const user = await UsersModel.create({
      username,
      email,
      password: hashPassword,
      roles: [userRole.value],
    });
    user.save();
    const { password: secureDeletePassword, ...restUser } = user.toJSON();
    res.status(200).json('User was created');
  }
};

const readAll = async (req, res) => {
  const users = await UsersModel.find();
  res.status(200).json(users);
};

const readById = async (req, res) => {
  const user = await UsersModel.findById({ _id: '' });
  res.status(200).json(user);
};
const updateByID = async (req, res) => {
  const user = await UsersModel.findOneAndUpdate({
    _id: '61dc23b31e36b9d830a8fa11',
    name: 'Vladik',
  });
  res.status(200).json(user);
};
const deleteAll = async (req, res) => {
  const users = await UsersModel.deleteMany();
  res.status(200).json(users);
};
const deleteById = async (req, res) => {
  const user = await UsersModel.deleteById({ _id: '' });
  res.status(200).json(user);
};

exports.create = create;
exports.readAll = readAll;
exports.readById = readById;
exports.updateByID = updateByID;
exports.deleteAll = deleteAll;
exports.deleteById = deleteById;
