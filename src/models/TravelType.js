const mongoose = require("mongoose");

const TravelTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const TravelType = mongoose.model('TravelType', TravelTypeSchema);

module.exports = TravelType;