const mongoose = require('mongoose');
const writerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  addedOn: {
    type: Date,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  storyCount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
});
module.exports = mongoose.model('writer', writerSchema);
