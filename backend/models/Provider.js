const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  address: String,
  services: [String],
  approved: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Provider', providerSchema);
