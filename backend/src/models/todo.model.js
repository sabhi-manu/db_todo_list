const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
    },
    isDone:{
        type:Boolean,
        default:false

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
    
}, {timestamps:true})

const todoModel = mongoose.model("todo",todoSchema)

module.exports = todoModel