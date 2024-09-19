const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();

// Set up CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH'); // Allow specific HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  next();
});

// Set up multer for multipart/form-data
const upload = multer();

// Middleware to parse URL-encoded and JSON data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Parse application/json

// Middleware to handle multipart/form-data (if you're using file uploads)
app.use(upload.array());

// MongoDB connection
const dbURI = 'mongodb://localhost:27017/phase3jobs';  // MongoDB URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

// Define a schema for reports




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
