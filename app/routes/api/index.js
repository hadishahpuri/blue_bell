const express = require("express");
const router = express.Router();
const messages = require('./messagesRoutes');
const users = require('./userRoutes');

router.use('/messages', messages);
router.use('/users', users);

module.exports = router;