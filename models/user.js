'use strict';
const Sequelize = require('sequelize');
var   connection = require('./../database/connection');





module.exports = function (connection) {
    var DataTypes = connection.DataTypes;
    var User = connection.define('User', {
        username: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
    });



    User.associate = function (models) {
        // associations can be defined here
    };


    return User;

}