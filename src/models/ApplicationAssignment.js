const mongoose = require("mongoose");

const ApplicationAssignmentSchema = mongoose.Schema({
    staff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application"
    }]
}, {
    timestamps: true
});

const ApplicationAssignment = mongoose.model("ApplicationAssignment", ApplicationAssignmentSchema);

module.exports = ApplicationAssignment;