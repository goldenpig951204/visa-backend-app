const mongoose = require("mongoose");

const VisaTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const VisaType = mongoose.model('VisaType', VisaTypeSchema);

module.exports = VisaType;