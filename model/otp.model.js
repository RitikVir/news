const mongoose=require("mongoose");
const otpSchema = mongoose.Schema({
    phoneNumber:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    role:{
        type: String,
        required:true
    },
    valueOtp:{
        type:Number,
        required: true
    },
    timestamp: {
        type: Date
    },
    type:{
        type:String
    }
});
module.exports= mongoose.model("otp",otpSchema);