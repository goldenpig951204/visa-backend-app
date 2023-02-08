const mongoose = require("mongoose");

const AnnouncementSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true 
    },
    type: {
        type: String,
        enum: ["agent", "staff"],
        default: "agent"
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
}, {
    timestamps: true
});

const Announcement = mongoose.model('Announcement', AnnouncementSchema);

module.exports = Announcement;