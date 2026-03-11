require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorMiddleware');
const patientRoutes = require('./routes/patientRoutes');

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Mount routers
app.use('/patients', patientRoutes);

// Error handler middleware (must be after routers)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = app;
