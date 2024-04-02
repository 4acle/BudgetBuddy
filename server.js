const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protectedRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.DB_CONNECTION)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Use Authentication Routes
app.use('/api/auth', authRoutes);

// Use Protected Routes
app.use('/api/protected', protectedRoutes);

// Use User Routes
app.use('/api/user', userRoutes);

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
