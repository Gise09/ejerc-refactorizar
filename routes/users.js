var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users 

/users/hola
listing. */
router.get('/hola', userController.getUser);

module.exports = router;
