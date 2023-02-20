const mongoose = require("mongoose");

const CommunicationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    text: {
        type: String,
    },
    isSeen: {
        type: Boolean,
        default: false
    },
    fileName: {
        type: String,
    }
}, {
    timestamps: true
});

const Communication = mongoose.model('Communication', CommunicationSchema);

module.exports = Communication;