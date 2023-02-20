const mongoose = require("mongoose");

const VisaDurationSchema = mongoose.Schema({
  duration: {
      type: String,
      required: true
  }
}, {
  timestamps: true
});

const VisaDuration = mongoose.model('VisaDuration', VisaDurationSchema);

module.exports = VisaDuration;