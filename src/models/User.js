const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    corpName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    phone: {
        type: String        
    },
    address: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 100
    },
    status: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['super_admin', 'admin', 'staff', 'agent'],
        default: 'agent'
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;