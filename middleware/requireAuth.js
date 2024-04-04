const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};

module.exports = requireAuth;
