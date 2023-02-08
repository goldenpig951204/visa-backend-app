const mongoose = require("mongoose");

const AgentVisaPriceSchema = mongoose.Schema({
    visaType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VisaType',
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const AgentVisaPrice = mongoose.model('AgentVisaPrice', AgentVisaPriceSchema);

module.exports = AgentVisaPrice;