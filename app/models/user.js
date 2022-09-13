const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true,
        default: null
    },
    password: {
        type: String,
        default: ''
    },
    authToken: {
        type: String,
        default: ''
    },
    createdAt: { type: Date, default: Date.now }
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(
         this.password,
        12
    );
    next();
});

module.exports = mongoose.model('User', userSchema);