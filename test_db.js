const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://mapuser:MapUser123@cluster0.kuwra.mongodb.net/myApp?retryWrites=true&w=majority&appName=Cluster0';

console.log("🔍 Connecting to MongoDB...");

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('✅ MongoDB connected successfully!');
    mongoose.connection.close(); // Close connection after testing
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });
