const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  bloodPressure: { type: String },
  bloodSugar: { type: Number },
  heartRate: { type: Number },
  spo2: { type: Number },
  recordedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Vitals', vitalsSchema);
