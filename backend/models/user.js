var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema({
    name: String,
    email: String,
    role: String,
    username: String,
    password: String
}, { versionKey: false });

User = mongoose.model('User', userSchema);

module.exports = User;