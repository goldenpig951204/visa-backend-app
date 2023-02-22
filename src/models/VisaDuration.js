const mongoose = require("mongoose");

const VisaDurationSchema = mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  slug: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const VisaDuration = mongoose.model('VisaDuration', VisaDurationSchema);

module.exports = VisaDuration;