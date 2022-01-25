const { Router } = require('express');
const router = Router();
const { create, readAll, readById, updateByID, deleteAll, deleteById } = require('./controller');
const { check } = require('express-validator');

router.post(
  '/',
  [
    check('username', "Username can't be empty").notEmpty(),
    check('password', 'Password is too simple').isLength({ min: 5, max: 20 }),
  ],
  create,
);
router.get('/', readAll);
router.get('/', readById);
router.put('/', updateByID);
router.delete('/', deleteAll);
router.delete('/', deleteById);

module.exports = router;
