const mongoose = require("mongoose");

const VisaPriceSchema = mongoose.Schema({
    visaType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VisaType',
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const VisaPrice = mongoose.model('VisaPrice', VisaPriceSchema);

module.exports = VisaPrice;