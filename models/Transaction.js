const mongoose = require('mongoose');
// only accept this data in each request
const TransactionsSchema = new mongoose.Schema({
  text: {
    type: String,
    trime: true,
    required: [true, 'Please add some text']
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionsSchema);
