const express = require("express");
const messageController = require("../../controllers/messagesController");
const router = express.Router();

let MessageController = new messageController();

router.get('/send', MessageController.sendMessage);

module.exports = router;