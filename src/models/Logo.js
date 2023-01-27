const mongoose = require("mongoose");

const LogoSchema = mongoose.Schema({
    name: {
        type: String,
        default: "Logo"
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const Logo = mongoose.model("Logo", LogoSchema);

module.exports = Logo;