const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  period: { type: Date, required: true },
  totalIncome: { type: Number, required: true },
  totalExpense: { type: Number, required: true },
  savings: { type: Number, required: true }, // or calculate dynamically based on totalIncome - totalExpense
  categories: [{
    name: String,
    spent: Number
  }]
});

module.exports = mongoose.model('Report', reportSchema);
