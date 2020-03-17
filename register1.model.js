const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const regSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength:6
    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    }
}, {
    timestamps: true,
});

const Register1 = mongoose.model('Register1', regSchema);

module.exports = Register1;