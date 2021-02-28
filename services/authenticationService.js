const bcrypt = require('bcrypt');



function AuthenticationService()
{
}


AuthenticationService.prototype.validatePassword = function(password, hashedPassword)
{
    return bcrypt.compareSync(password, hashedPassword);
};

AuthenticationService.prototype.hashPassword = function (password) {
    return bcrypt.hashSync(password, 10);
};

var authenticationService = new AuthenticationService();
module.exports = authenticationService;