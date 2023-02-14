const mongoose = require("mongoose");

const VisaTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stay_duration: {
        type: Number,
        required: true
    },
    issue_duration: {
        type: Number,
        required: true
    },
    save_travel_cost: {
        type: Boolean,
        default: true
    },
    need_visit_consulate: {
        type: Boolean,
        default: true
    },
    deliver_to_door: {
        type: Boolean,
        default: true
    },
    online_auto_tracking: {
        type: Boolean,
        default: true
    },
    is_most_popular: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const VisaType = mongoose.model('VisaType', VisaTypeSchema);

module.exports = VisaType;