const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const path = require('path');
const rootPath = path.normalize(__dirname + '/../');

module.exports = function (app) {
    app.use(logger('tiny'));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(session({
        secret: 'multi vision unicorns',
        resave: false,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(rootPath));
    app.use(express.static(rootPath + '/dist'));
    app.use(express.static(rootPath + '/dist/ng-fundamentals'));
    app.use('/events', express.static(rootPath));
}
