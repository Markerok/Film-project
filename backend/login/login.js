const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UsersModel = require('../users/models/users');
const FilmModel = require('../FIlm/film');
const { secret } = require('../config');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UsersModel.findOne({ username });
    if (!user) {
      res.status(400).json({ message: `User ${username} has not registry` });
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password' });
    }
    const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });

    return res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
      },
      comments: [
        {
          username: user.username,
        },
      ],
    });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
};

exports.login = login;
