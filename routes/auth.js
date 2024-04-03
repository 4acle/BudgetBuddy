const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

// User Login
router.post('/login', async (req, res) => {
  try {
    const { identifier, password } = req.body;

    // Input validation
    if (!identifier || !password) {
      return res.status(400).json({ error: 'Identifier and password are required' });
    }

    // Check if identifier is an email or a username
    const isEmail = validator.isEmail(identifier);

    // Query the user by email or username
    const user = await User.findOne(isEmail ? { email: identifier } : { username: identifier });

    if (!user || !(await bcrypt.compare(password, user.password))) {
       return res.status(401).json({ error: 'Authentication failed' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
