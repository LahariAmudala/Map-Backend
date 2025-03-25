// const mongoose = require('../config/db');

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model('User', userSchema, 'users'); // Explicitly set 'users' collection
// module.exports = User;
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Connect to MongoDB directly in this file
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/myApp';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
module.exports = User;