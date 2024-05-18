const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: {type: String, require: true},
    age: {type: Number, min: 18, max: 60, require: true},
    blood_group: {type: String, required: true},
    last_donated: {type: Number, required: true, default: 0},
    created_at: {type: Date, default: Date.now, immutable: true},
    updated_at: {type: Date, default: Date.now}
});

const User = mongoose.model('users', userSchema);

module.exports = User;