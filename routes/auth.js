var express = require('express');
var router = express.Router();
var passport = require('passport');
var authController = require('../controllers/authController');
var auth_middleware = require('../middleware/authentication_middleware');


router.post('/login', authController.authenticate_user);
router.post('/register', authController.register_user);
router.get('/check_auth_status',auth_middleware, authController.check_auth_status);

module.exports = router;