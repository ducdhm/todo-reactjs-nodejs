/**
 * ReNo
 * @author: ducdhm@gmail.com
 * @version: 1.0.0
 */

// Environments
// --------------------------------
var envs = ['dev', 'prod'];
var env = process.env.NODE_ENV || 'dev';
if (envs.indexOf(env) === -1) {
    console.error('Could not get env. Stopping...');
    return;
}


// Configurations
// --------------------------------
var config = require('./config/' + env);


// Main app
// --------------------------------
var express = require('express');
var app = express();
// Static folder
app.use('/', express.static(__dirname + '../client/public'));
// View cache for production
if (env === 'prod') {
    app.enable('view cache');
}


// Compress all requests
// --------------------------------
var compression = require('compression');
app.use(compression());


// Body parser
// --------------------------------
var bodyParser = require('body-parser');
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));


// EJS layout plugin
// --------------------------------
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);


// Express validator
// --------------------------------
var expressValidator = require('express-validator');
app.use(expressValidator());


// Cookie parser (needed for auth)
// --------------------------------
var cookieParser = require('cookie-parser');
app.use(cookieParser());


// Session management
// --------------------------------
var session = require('express-session');
app.use(session({
    secret: config.session.secret,
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // in milliseconds, total 7 days
        maxAge: 7 * 24 * 60 * 60 * 1000 // in milliseconds, total 7 days
    }
}));


// Connect to our database
// --------------------------------
var mongoose = require('mongoose');
mongoose.connect(config.mongodb.url, config.mongodb.options);


// Exports
// --------------------------------
exports.app = app;
exports.config = config;

