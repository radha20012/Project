
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { getUserDashboard } = require('../controllers/customerController');

// ✅ Public route to check if working
router.get('/', (req, res) => {
  res.json({ success: true, message: '✅ User route is working' });
});

// ✅ Protected route for logged-in users (role: user)
router.get('/dashboard', verifyToken(['user']), getUserDashboard);

module.exports = router;
