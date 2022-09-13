const jwt = require('jsonwebtoken');
const { promisify } = require("util");
const User = require("../models/user");

module.exports = async (req, res, next) => {
    if (req.headers.authorization) {
        const decodedToken = await promisify(jwt.verify)(
            req.headers.authorization,
            "hascomamioawiuandihaw78"
        ).catch();
        const user = await User.findById(decodedToken._id);
        if (user)
            return next();
    }
    return res.status(403).json({
        status: false,
        message: "Unauthenticated!"
    });
}