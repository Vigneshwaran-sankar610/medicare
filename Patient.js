const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  city: { type: String, default: 'Chennai' },
  patientId: { type: String, unique: true },
  active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
