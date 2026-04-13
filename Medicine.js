const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dose: { type: String, required: true },
  time: { type: String, required: true },
  taken: { type: Boolean, default: false },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
}, { timestamps: true });

module.exports = mongoose.model('Medicine', medicineSchema);
