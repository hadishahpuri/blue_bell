const jwt = require('jsonwebtoken');
const user = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports = class userController {
    async login(req, res) {
        return res.render('login', { title: 'Login' });
    }

    async authenticate(req, res) {
        const userObj = await user.findOne({email: req.body.email});
        if (userObj && bcrypt.compareSync(req.body.password, userObj.password)) {
            const token = jwt.sign({
                _id: userObj._id
            }, "hascomamioawiuandihaw78", {
                expiresIn: "30d",
            })
            return res.json({
                status: true,
                'message': 'success',
                'user': userObj,token
            })
        }
        return res.status(401).json({
            status: false,
            'message': 'ریدی',
        })
    }

    async secret(req, res) {
        return res.render('secret', { title: 'Secret Page' })
    }

    async logout(req, res) {
        req.logout(function (res) {
            console.log(res);
        });
        return res.redirect('/');
    }
}