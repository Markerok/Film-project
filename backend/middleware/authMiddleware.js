const jwt = require('jsonwebtoken');
const { secret } = require('../config');

const authMiddleware = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'User has not registry' });
    } else {
      const decodeData = jwt.verify(token, secret);
      req.user = decodeData;
      next();
    }
  } catch (e) {
    return res.status(403).json({ message: 'User has not registry' });
  }
};

exports.authMiddleware = authMiddleware;
