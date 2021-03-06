const mongoose = require('mongoose');
const requestStorySchema = mongoose.Schema({
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
  storyUrl: {
    type: String,
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  isRejected: {
    type: Boolean,
    default: false
  },
  storyId: {
    type: mongoose.Schema.Types.ObjectId
  },
  isActive: {
    type: Boolean,
    default: true
  },
  comment: {
    type: String
  }
});
module.exports = mongoose.model('requestStory', requestStorySchema);
