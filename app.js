var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var database = require('./database/connection');
var migration = require('./database/migration');
var passport = require('passport');
require('./middleware/passport');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const fileUpload = require('express-fileupload');
migration.runMigration();                                   //Set up DB Tables
var app = express();                                        //Define app
var port = process.env.PORT || 3001;                        //Set the Port

app.use(cors()); // include before other routes

//Configure App 
https.createServer(
    {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'certificate'
    },
    app).listen(port, function () {
    console.log('ready on port ' + port);
});


//app.listen(port, function(){ 
//    console.log('ready on port ' + port);
//});


//Use Middleware 


app.use(fileUpload());
app.use(bodyParser());                                      //use body parser


  


 app.use(express.static(path.join(__dirname, "app")));       //Expose directory for accessinf files


//Define The Routes
const auth_route = require('./routes/auth');

app.use('/api/auth', auth_route);


app.get('/', function(req, res){
    res.send('running...');
});



