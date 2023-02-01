const mongoose = require("mongoose");

const ApplicationSchema = mongoose.Schema({
    orderNumber: {
        type: String
    },
    amount: {
        type: Number
    },
    isPaid: {
        type: Boolean,
        default: false
    }, 
    persons: [{
        firstName: {
            type: String,
            required: true
        }, 
        lastName: {
            type: String,
            required: true
        },
        fatherName: {
            type: String,
            required: true
        },
        birthday: {
            type: Date,
            required: true
        }, 
        nationality: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        prevNationality: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            match: /.+\@.+\..+/
        },
        occupation: {
            type: String,
            required: true
        },
        visaType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'VisaType',
            required: true
        },
        travelType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'TravelType',
            required: true
        },
        passportNumber: {
            type: String,
            required: true
        },
        visitedTimes: {
            type: Number,
            required: true
        },
        issuedDate: {
            type: Date,
            required: true
        },
        expireDate: {
            type: Date,
            required: true
        },
        personalPhoto: {
            type: String,
            required: true
        },
        passportPhoto: {
            type: String,
            required: true
        },
        pdf: {
            type: String
        },
        note: {
            type: String
        }
    }],
    status: {
        type: String,
        enum: ['pending', 'received', 'declined', 'approved'],
        default: 'pending'
    },
    note: {
        type: String
    },
    attach: {
        type: String
    },
    by: {
        type: String,
        enum: ['global', 'agent'],
        default: 'global'
    },
    agent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;
