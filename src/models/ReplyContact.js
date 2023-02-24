const mongoose = require("mongoose");

const ReplyContactSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    contact: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contact",
        required: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const ReplyContact = mongoose.model("ReplyContact", ReplyContactSchema);

module.exports = ReplyContact;