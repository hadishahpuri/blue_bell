const express = require("express");
const connectEnsureLogin = require('connect-ensure-login');
const passport = require('passport');
const localStrategy = require('passport-local');
const userController = require("../../controllers/userController");
const router = express.Router();

let UserController = new userController();

router.get('/login', UserController.login);
router.get('/secret', UserController.secret);
router.get('/logout', UserController.logout);
router.post('/login', passport.authenticate('local',
    {failureRedirect: '/login', successRedirect: '/secret'}, UserController.authenticate));

module.exports = router;