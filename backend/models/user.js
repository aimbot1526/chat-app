var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema({
    _id: Number,
    name: String,
    email: String,
    role: String,
    username: String,
    password: String
});

User = mongoose.model('User', userSchema);

module.exports = User;