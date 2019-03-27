const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  interest: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  bookmark: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  isVerifiedOtp: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  }
});
module.exports = mongoose.model('user', userSchema);
