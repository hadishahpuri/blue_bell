const mongoose = require('mongoose');
const User = require('../models/user');
const Message = require('../models/message');

module.exports = class messageController {
    async sendMessage(req, res) {
        const user = await User.findOneAndUpdate({email: 'hadishahpuri@gmail.com'},
            {$setOnInsert: {email: 'hadishahpuri@gmail.com', password: 'password', name: 'hadi'}},
            {upsert: true, new: true}).exec();

        const message = new Message();
        message.text = "test text";
        message.user = user._id;
        await message.save();
        return res.json({
            status: true,
            'message': message,
            'user': user,
        })
    };

    async messages(req, res) {

    };
}