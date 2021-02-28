const passport = require('passport');
const jwt = require('jsonwebtoken');


module.exports = async function (req, res, next) 
{
    console.log('performing authentication...');
   


    await passport.authenticate('jwt', { session: false }, function (error, user, info) {
        if (error) {
            return res.status(500).json({
                message: 'Something went wrong: ' + err,
                user: user
            });
        } 
        
        if (!user) {
            return res.status(400).json({
                isLoggedIn: false,
                user: user
            });
        }

        console.log('Authentication Passed! Proceeding with request...');
        req.user = user;
        next();
   


    })(req, res, next);


}