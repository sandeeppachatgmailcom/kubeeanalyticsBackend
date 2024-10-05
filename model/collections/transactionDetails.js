const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
  itemCode: { type: String, required: true  },
  itemName: { type: String, required: true  },
  easyCode: { type: String, required: true  },
  batchCode: { type: String, required: false },
  quantity: { type: Number, required: true  },
  Price: { type: Number, required: true  },
  type: { type: String, enum: ['SALES', 'PURCHASE']},
  billnumber: { type: String, required: true  }
});
const TransactionDetailedColltion = mongoose.model('TransactionDetail', salesSchema);
module.exports = TransactionDetailedColltion;
