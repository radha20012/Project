
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Route Imports
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const providerRoutes = require('./routes/providerRoutes');
const userRoutes = require('./routes/userRoutes');
const manageRoutes = require('./routes/manageRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const categoryRoutes = require('./routes/cat/categoryRoutes');
const cartRoutes = require('./routes/cartRoute');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/provider', providerRoutes);
app.use('/api/user', userRoutes);          // ✅ Make sure ./routes/userRoutes.js exists
app.use('/api/manage', manageRoutes);      // ✅ Make sure ./routes/manageRoutes.js exists
app.use('/api/services', serviceRoutes);   // ✅ Make sure ./routes/serviceRoutes.js exists
app.use('/api/service', require('./routes/serviceRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/categories', categoryRoutes);
app.use('/api', categoryRoutes);
// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
