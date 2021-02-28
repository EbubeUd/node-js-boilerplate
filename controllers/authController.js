const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/' + env + '.json');
const Sequelize = require('sequelize');
var connection = require('../database/connection');
const User = require('../models/user')(connection);

const jwt = require('jsonwebtoken');
const passport = require('passport');
const body_parser = require('body-parser');
var authenticationService = require('../services/authenticationService');


// Display list of all Genre.
exports.authenticate_user = function (req, res) {
        console.log('logging in...');

    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            return res.status(500).json({
                message: 'Something went wrong: ' + err,
                user: user
            });
        } else if (!user) {
            return res.status(400).json({
                message: info.message,
                user: user
            });
        } 
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            // generate a signed son web token with the contents of user object and return it in the response
            const token = jwt.sign(user.toJSON(), config.jwt.secret);
            return res.json({ user, token });
        });
    })(req, res);
    
};


exports.register_user = async function (req, res) {
    console.log('registering...');
    var user = req.body;
    var HashedPassword = await authenticationService.hashPassword(user.password);
    user.password = HashedPassword;
    // Create a new user
    User.create(user).then(created_user => {
        res.send(created_user);
    });
}


exports.check_auth_status = async function (req, res, next) {
    console.log('Returning auth details...');
    console.log(req.user);
    return res.status(200).json({
        isLoggedIn: true,
        user: req.user
    });

}

