const express = require('express');
const User = require('../models/User');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

router.get('/profile', requireAuth, async (req, res) => {
  try {
    // Fetch the user from the database
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Selectively send back user data
    const userProfile = {
      username: user.username,
      email: user.email,
      createdAt: user.createdAt
    };

    res.json({ message: 'User profile data', user: userProfile });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
});

module.exports = router;