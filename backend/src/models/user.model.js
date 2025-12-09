const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    post:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"todo"
    }],
},{timestamps:true})

const userModel = mongoose.model("user", userSchema)
module.exports = userModel