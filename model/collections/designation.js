const mongoose  = require("mongoose");

const designationSchema = new mongoose.Schema({
    designationId:{type:String,unique:true},
    designation:{type:String,unique:true},
    reportingHead:{type:String},
    short:{type:String,unique:true,
    rank:{type:Number,unique:true}    
    },
})

const designationCollection = new mongoose.model('designation',designationSchema)
module.exports = designationCollection
