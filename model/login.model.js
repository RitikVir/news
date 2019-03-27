const mongoose = require('mongoose');
const loginSchema = mongoose.Schema({
  phoneNumber: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String
  },
  attempts: {
    type: Number,
    default: 10
  },
  isLocked: {
    type: Boolean,
    default: false
  },
  isVerified: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model('login', loginSchema);
