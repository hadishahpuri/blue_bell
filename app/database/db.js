const mongoose = require('mongoose');

class MongoDB {
    #dbURI;
    #dbOptions;

    #dbConnection;

    constructor(dbConfig = {}) {
        this.#dbURI = dbConfig.DB_URL ?? process.env.MONGODB_CONNECTION_URL;
        this.#dbOptions = dbConfig.DB_OPTIONS ?? {};
    }

    async connect() {
        try {
            this.#dbConnection = await mongoose.connect(this.#dbURI, {
                ...this.#dbOptions,
            });
            console.log("connect to mongoDB");
            return this.#dbConnection;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

module.exports = MongoDB;
