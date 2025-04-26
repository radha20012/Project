
// const express = require('express');
// const router = express.Router();
// const verifyToken = require('../middleware/authMiddleware');
// const { getUserDashboard } = require('../controllers/customerController');

// // ✅ Public route to check if working
// router.get('/', (req, res) => {
//   res.json({ success: true, message: '✅ User route is working' });
// });

// // ✅ Protected route for logged-in users (role: user)
// router.get('/dashboard', verifyToken(['user']), getUserDashboard);

// module.exports = router;
// File: routes/userRoutes.js

const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { getUserDashboard } = require('../controllers/customerController');
const User = require('../models/User'); // 👈 Make sure this path is correct based on your folder structure

// ✅ Public route to check if working
router.get('/', (req, res) => {
  res.json({ success: true, message: '✅ User route is working' });
});

// ✅ Protected route for logged-in users (role: user)
router.get('/dashboard', verifyToken(['user']), getUserDashboard);

// ✅ NEW: Route to get all users with role "user"
router.get('/all', async (req, res) => {
  try {
    const users = await User.find({ role: 'user' });
    res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

module.exports = router;
