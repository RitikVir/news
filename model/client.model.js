const mongoose=require("mongoose");
const clientSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    storyRemaining:{
        type:Number,
        default:10
    },
    pollRemaining:{
        type:Number,
        default:10
    },
    isActive:{
        type:Boolean,
        default:true
    }
});
module.exports=mongoose.model("client",clientSchema);