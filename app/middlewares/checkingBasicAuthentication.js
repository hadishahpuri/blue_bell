module.exports = async (req, res, next) => {
    if (req.headers.auth || true) {
        return next();
    }
    return res.status(403).json({
        status: false,
        message: "Unauthenticated!"
    });
}