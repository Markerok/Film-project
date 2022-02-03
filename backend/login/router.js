const { Router } = require('express');
const router = Router();
const { login } = require('./login');

router.post('/', login);

module.exports = router;
