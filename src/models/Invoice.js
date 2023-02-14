const mongoose = require("mongoose");

const InvoiceSchema = mongoose.Schema({
    agent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application"
    }],
    issuedDate: {
        type: Date
    },
    dueDate: {
        type: Date
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['unpaid', 'paid'],
        default: 'unpaid'
    }
});

const Invoice = mongoose.model("Invoice", InvoiceSchema);

module.exports = Invoice;