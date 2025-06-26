const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    console.log('REQ.BODY:', req.body); // ✅ check this
     console.log('✅ Incoming registration body:', req.body);

    const { email, password, role } = req.body;

    const newUser = new User({ email, password, role });
    await newUser.save();

    res.status(201).json({ message: 'User created' });
  } catch (err) {
    console.warn(err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

module.exports = router;
