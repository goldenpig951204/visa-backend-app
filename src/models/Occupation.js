const mongoose = require("mongoose");

const OccupationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Occupation = mongoose.model('Occupation', OccupationSchema);

module.exports = Occupation;