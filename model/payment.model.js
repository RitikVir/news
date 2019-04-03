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
    type: Number
  },
  isSuccessful: {
    type: String,
    default: 'failure'
  }
});
module.exports = mongoose.model('payment', paymentSchema);
