const mongoose = require("mongoose");

const LogoSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ['email', 'user', 'admin'],
        default: 'email'
    },
    image: {
        type: String,
        required: true
    }
});

const Logo = mongoose.model("Logo", LogoSchema);

module.exports = Logo;