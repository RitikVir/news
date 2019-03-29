const mongoose = require('mongoose');
const paymentSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  units: {
    type: Number,
    required: true
  },
  transactionId: {
    type: mongoose.Schema.Types.ObjectId
  },
  isSuccessful: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model('payment', paymentSchema);
