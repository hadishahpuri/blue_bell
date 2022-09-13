const express = require("express");
const path = require('path');
const fileUpload = require("express-fileupload");
const app = express();
const mongoDB = require("./database/db");

new mongoDB().connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'main');
app.set('view engine', 'ejs');
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

require("./routes")(app);

module.exports = app;