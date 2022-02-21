const { Router } = require('express');
const router = Router();
const { create, readAll } = require('./controller');
const { check } = require('express-validator');

router.post('/', [check('comment', "comment can't be empty").notEmpty()], create);
router.get('/', readAll);

module.exports = router;
