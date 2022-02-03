const { Router } = require('express');
const jwt = require('jsonwebtoken');
const router = Router();
const UsersModel = require('../users/models/users');
const { authMiddleware } = require('../middleware/authMiddleware');
const { secret } = require('../config');

router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await UsersModel.findOne({ _id: req.user.id });
    const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
    return res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
});

module.exports = router;
