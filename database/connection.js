'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/'+env+'.json');
const db = {};


let sequelize;
if (config.use_env_variable)
{
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else
{
    sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, config.database);
}

sequelize.authenticate()
    .then(function (err) {
        console.log('Connection has been established successfully.');
    }, function (err) {
        console.log('Unable to connect to the database:', err);
    });



module.exports = sequelize;