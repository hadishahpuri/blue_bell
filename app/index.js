const express = require("express");
const session = require("express-session");
const path = require('path');
const fileUpload = require("express-fileupload");
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const app = express();
require("./database/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'main');
app.set('view engine', 'ejs');
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

require("./routes")(app);

module.exports = app;