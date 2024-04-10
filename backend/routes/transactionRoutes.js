const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth');
const Transaction = require('../models/Transaction');

router.use(requireAuth);

// POST: Create a new transaction
router.post('/', async (req, res) => {
  const { userId, type, category, amount, date, description } = req.body;

  try {
    const transaction = new Transaction({ userId, type, category, amount, date, description });
    await transaction.save();
    res.status(201).send(transaction);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// GET: Retrieve all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).send(transactions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET: Retrieve a single transaction by id
router.get('/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).send('Transaction not found.');
    res.status(200).send(transaction);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// PUT: Update a transaction by id
router.put('/:id', async (req, res) => {
  const { userId, type, category, amount, date, description } = req.body;
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, { userId, type, category, amount, date, description }, { new: true });
    if (!transaction) return res.status(404).send('Transaction not found.');
    res.status(200).send(transaction);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// DELETE: Delete a transaction by id
router.delete('/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) return res.status(404).send('Transaction not found.');
    res.status(200).send(transaction);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;