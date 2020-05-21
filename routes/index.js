var express = require("express");
var router = express.Router();
const fs = require('fs');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');

const indexController = require('../controllers/indexController');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname) )
  }
});
 
var upload = multer({ storage: storage })

/* GET home page. */
router.get("/", indexController.getIndex);

/* GET home page. */
router.get("/register", indexController.getRegister);

router.post("/register", upload.single('avatar'), indexController.postRegister);

module.exports = router;
