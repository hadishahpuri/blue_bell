const mongoose = require('mongoose');

async function init() {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true });
}
init().catch(err => {
    console.log(err);
});