const express = require('express');
const user = require('../controller');
const { validateCreateUser, validate, validateUpdateUser } = require('../../../middlewares/validation');

const router = express.Router();

router.post('/', validateCreateUser, validate, user.create);
router.get('/:id', user.view);
router.put('/:id', validateUpdateUser, validate, user.update);
router.get('/', user.list);
router.delete('/:id', user.delete);

module.exports = { router, protected: false };