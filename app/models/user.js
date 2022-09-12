const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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
    hashed_password: {
        type: String,
        default: ''
    },
    authToken: {
        type: String,
        default: ''
    },
    createdAt: { type: Date, default: Date.now }
});

userSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

userSchema.path('email').validate(function(email) {
    return email.length;
}, 'Email cannot be blank');

userSchema.path('email').validate(function(email) {
    return new Promise(resolve => {
        const User = mongoose.model('User');
        if (this.isNew || this.isModified('email')) {
            User.find({ email }).exec((err, users) => resolve(!err && !users.length));
        } else resolve(true);
    });
}, 'Email `{VALUE}` already exists');

userSchema.virtual('password')
    .set(function (password) {
        this._password = password;
        this.hashed_password = bcrypt.hashSync(password, 10);
    })
    .get(function () {
        return this._password;
    })

userSchema.methods = {
    authenticate: function(password) {
        return bcrypt.compareSync(password, this.password);
    },
}

module.exports = mongoose.model('User', userSchema);