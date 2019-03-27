const mongoose= require('mongoose');
const storySchema = mongoose.Schema({
 
    heading:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    storyUrl:{
        type:String,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    authorRole:{
        type:String,
        required:true
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
});
module.exports=mongoose.model("story",storySchema);