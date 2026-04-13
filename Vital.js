const express = require('express');
const router = express.Router();
const Vitals = require('../models/Vitals');

// GET vitals
router.get('/', async (req, res) => {
  try {
    const vitals = await Vitals.find().sort({ recordedAt: -1 });
    res.json(vitals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST add vitals
router.post('/', async (req, res) => {
  try {
    const vitals = new Vitals(req.body);
    await vitals.save();
    res.status(201).json(vitals);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
