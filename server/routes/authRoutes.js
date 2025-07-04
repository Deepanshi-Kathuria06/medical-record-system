const express = require('express');
const router = express.Router();
const User = require('../models/User'); // assuming path is correct

router.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already registered.' });
    }

    const user = new User({ username, email, password, role });
    await user.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'Server error during registration.' });
  }
});


// PATCH /api/user/wallet
// PATCH /api/user/wallet
router.patch('/user/wallet', async (req, res) => {
  const { username, walletAddress } = req.body;

  if (!username || !walletAddress) {
    return res.status(400).json({ message: 'Username and wallet address are required.' });
  }

  try {
    const user = await User.findOneAndUpdate({ username }, { walletAddress });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'Wallet connected successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while updating wallet' });
  }
});



module.exports = router;