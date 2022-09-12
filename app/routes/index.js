module.exports = (app) => {
    app.use(require("./web"));
    app.use(require("../middlewares/checkingBasicAuthentication"))
    app.use(require("./api"));

    app.use((req, res, next) => {
        res.status(404).send("oops ! 404")
    });
};