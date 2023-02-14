const mongoose = require("mongoose");

const TrasactionSchema = mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    application: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    },
    amount: {
        type: Number
    }
}, {
    timestamps: true
});

const Transaction = mongoose.model('Transaction', TrasactionSchema);

module.exports = Transaction;