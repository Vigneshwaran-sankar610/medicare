const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/medicines', require('./routes/medicines'));
app.use('/api/patients', require('./routes/patients'));
app.use('/api/vitals', require('./routes/vitals'));

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'MediCare API Running 💊', version: '1.0.0' });
});

// MongoDB Connect
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/medicare';
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
