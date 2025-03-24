// require('dotenv').config();
// const express = require('express');

// const cors=require('cors')

// const app = express();
// const authRoutes = require('./routes/authRoutes');
// const dashboardRoutes = require('./routes/dashboardRoutes');
// const mapRoutes = require('./routes/mapRoutes');
// const corsOptions = {
//   origin: 'http://localhost:3000', // Your frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };



// // Middleware
// app.use(express.json());
// app.use(cors(corsOptions))

// // Routes
// app.use('/api/login', authRoutes);
// app.use('/api/dashboard', dashboardRoutes);
// app.use('/api/map', mapRoutes);

// // Error Handling
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const cors = require('cors');




const app = express();




const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const mapRoutes = require('./routes/mapRoutes');

const corsOptions = {
  origin: 'https://map-fe-320668246657.us-central1.run.app', // Allow your deployed frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use('/api/login', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/map', mapRoutes);





app.get('/api/health', (req, res) => {
  res.send({ message: 'healthy' });
});
// Error Handling
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Cloud Run requires the app to listen on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});