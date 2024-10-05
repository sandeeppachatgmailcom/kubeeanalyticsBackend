const mongoose = require("mongoose");

const serialNumebrSchema = mongoose.Schema({
        collectionName:{type:String},
        prefix:{type:String},
        nextNumber:{type:Number,default:1000001}
})

const serialNumberCollection = mongoose.model('serialNumber',serialNumebrSchema)
module.exports = serialNumberCollection

