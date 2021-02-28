const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const Sequelize = require('sequelize');
const connection = require('../database/connection');
const User = require('../models/user')(connection);
var authenticationService = require('../services/authenticationService');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/' + env + '.json');
var opts = {}
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwt.secret;


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    },

    function (email, password, cb) {
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        return User.findOne({ where: { email: email}})
            .then(user => {
                if ((user==null) || (user.dataValues == null)) {
                    return cb(null, false, { message: 'There is no user with that email' });
                } else if (!authenticationService.validatePassword(password, user.dataValues.password))
                {
                    return cb(null, false, { message: 'Incorrect Password' });
                }
                return cb(null, user, { message: 'Logged In Successfully' });
            })
            .catch(err => cb(err));
    }
));

//passport.use(new JWTStrategy({
//    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//    secretOrKey: config.jwt.secret
//},
//    function (jwtPayload, cb) {

//        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
//        console.log("Found");
//        return User.findOneById(jwtPayload.id)
//            .then(user => {
//                return cb(null, user);
//            })
//            .catch(err => {
//                return cb(null, false);
//            });
//    }
//));

passport.use(new JWTStrategy(opts, function(jwt_payload, done) {
    User.findOne({
        where: {
            id: jwt_payload.id
        }}).then(user => {
        done(null, user, "Success");
    }).error(error => {
        done(error, user, "Failed");
    });
}));


