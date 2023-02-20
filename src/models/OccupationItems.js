const mongoose = require("mongoose");

const OccupationItemsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const OccupationItems = mongoose.model('OccupationItems', OccupationItemsSchema);

module.exports = OccupationItems;