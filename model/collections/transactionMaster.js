const mongoose = require("mongoose");

const transactionMasterSchema = new mongoose.Schema({
  billnumber: { type: String, unique: true, required: true },
  clientId: { type: String },
  totalAmount: { type: Number },
  deleted: { type: Boolean, required: true, default: false },
  createdUser: { type: String },  
  type: { type: String, required: true }, // Ensure 'type' is required
  billDate: { type: Date, required: true }, // Ensure 'billDate' is required
});

// Use mongoose.model to create the collection/model
const transactionMasterCollection = mongoose.model('transactionMaster', transactionMasterSchema);

module.exports = transactionMasterCollection;
