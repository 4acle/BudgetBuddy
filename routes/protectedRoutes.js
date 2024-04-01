const express = require('express');
const requireAuth = require('./middleware/requireAuth');

const router = express.Router();

router.get('/protected', requireAuth, (req, res) => {
  res.send("This route is protected.");
});
