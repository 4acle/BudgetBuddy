const express = require('express');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

router.get('/profile', requireAuth, (req, res) => {
  res.json({ message: 'User profile data', user: req.user });
});

module.exports = router;