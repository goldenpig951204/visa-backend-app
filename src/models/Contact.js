const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String
    }
}, {
    timestamps: true
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;