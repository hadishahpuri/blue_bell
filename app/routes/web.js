const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
let UserController = new userController();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

router.get('/login', UserController.login);
router.post('/login', UserController.authenticate);

module.exports = router;