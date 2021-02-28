var connection = require('./connection');
var path = require('path');
const DataTypes = connection.DataTypes;

const user = require('../models/user')(connection);



function Migration() {
    this.id = 'id_1';
}


Migration.prototype.setName = function (name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
};

//Run Migration
Migration.prototype.runMigration = function () {
    console.log('running migration...');
    connection
        .sync({ force: false })
        .then(function (err) {
            console.log('Migration Completed!');
        }, function (err) {
            console.log('An error occurred while creating the table:', err);
        });
};

var migration = new Migration();


module.exports = migration;

