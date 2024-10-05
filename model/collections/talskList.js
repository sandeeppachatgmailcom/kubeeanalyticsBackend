const { default: mongoose } = require("mongoose");


const taskSchema = mongoose.Schema({
        taskId:{type:String,unique:true},
        taskName:{type:String},
        designation:{type:String,required:true},
        taskDetails:{type:String },
        createdDate:{type:Date,required:true},
        createdBy:{type:String,required:true},
        active:{type:Boolean,required:true,default:true},
        completed:{type:Boolean,required:true,default:false},
        deleted:{type:Boolean,required:true,default:false},
})

const taskCollection  = mongoose.model('task',taskSchema)

module.exports = taskCollection