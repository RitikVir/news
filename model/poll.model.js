const mongoose = require("mongoose");
const pollSchema = mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    detail:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
    },
    authorRole:{
        type: String,
        required:true
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true 
    },
    lastDate: {
        type:Date
    },
    positiveCount:{
        type: Number,
        default:0
    },
    negativeCount: {
        type: Number,
        default: 0
    },
    neutralCount: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    }
});
module.exports = mongoose.model("poll",pollSchema);
