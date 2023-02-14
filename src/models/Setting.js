const mongoose = require("mongoose");

const SettingSchema = mongoose.Schema({
    STRIPE_PRIVATE_KEY: {
        type: String
    },
    STRIPE_SECRET_KEY: {
        type: String
    }, 
    TWILIO_API_KEY: {
        type: String
    },
    TWILIO_API_SECRET_KEY: {
        type: String
    },
    TWILIO_PHONE: {
        type: String
    },
    TWILIO_WHATSAPP_PHONE: {
        type: String
    },
    SENDGRID_API_KEY: {
        type: String
    },
    SENDGRID_USER: {
        type: String
    },
    GOOGLE_MAP_API_KEY: {
        type: String
    }
});

const Setting = mongoose.model("Setting", SettingSchema);

module.exports = Setting;