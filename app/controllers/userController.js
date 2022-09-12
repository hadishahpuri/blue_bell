const passport = require('passport');
const connectEnsureLogin = require("connect-ensure-login");

module.exports = class userController {
    async login(req, res) {
        return res.render('login', { title: 'Login' });
    }

    async authenticate(req, res) {
        return res.json({
            status: true,
            'message': 'success',
            'user': req.use,
        })
    }

    async secret(req, res) {
        return res.render('secret', { title: 'Secret Page' })
    }

    async logout(req, res) {
        req.logout();
        return res.redirect('/');
    }
}