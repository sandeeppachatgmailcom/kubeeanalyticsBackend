const mongoose = require('mongoose');

// Define the schema for each batch in the array
const batchSchema = new mongoose.Schema({
    batchCode: { type: String, unique: true, sparse: true }, // Unique and allows multiple nulls with sparse
    sellingPrice: { type: Number, required: true, default: 0.00 },
    price: { type: Number, required: true, default: 0.00 },
    purchaseCost: { type: Number, required: true, default: 0 },
    quantity: { type: Number, required: true, default: 0 },
    defaultBatch: { type: Boolean, default: true } // Default batch indicator
});

// Define the product schema
const itemSchema = new mongoose.Schema({
    itemName: { type: String }, 
    isActive:{ type: String,  default: true },
    easyCode: { type: String, unique: true, required: true },
    itemCode: { type: String, unique: true, required: true },
    deleted:{type:Boolean,default:false},
    batch: {
        type: [batchSchema],
        default: [] ,  
    },
  
});

// Creating a model
const productCollection = mongoose.model('item', itemSchema);

module.exports = productCollection;
