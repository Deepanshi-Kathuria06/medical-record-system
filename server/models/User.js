const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['patient', 'doctor'],
    required: true,
  },
  walletAddress: {
    type: String,
    unique: true,
    sparse: true,
    default: null,
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
