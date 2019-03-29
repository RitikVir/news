const mongoose = require('mongoose');
const requestPollSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  pollId: {
    type: mongoose.Schema.Types.ObjectId
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  isRejected: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: false
  },
  comment: {
    type: String
  },
  options: [
    {
      optionValue: {
        type: String
      }
    }
  ]
});
module.exports = mongoose.model('requestPoll', requestPollSchema);
