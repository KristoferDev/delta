const usersController = require('../controllers/users');
const express = require('express');
const router = express.Router();

router.get('/login', usersController.getLogin);
router.post('/login', usersController.postLogin);
router.get('/register', usersController.getRegister);
router.post('/register', usersController.postRegister);

module.exports = router;
