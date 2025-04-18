
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const {
  getProviderDashboard,
  getAllProviders
} = require('../controllers/providerController');

// ✅ Provider dashboard route (Protected: only provider can access)
router.get('/dashboard', verifyToken(['provider']), getProviderDashboard);

// ✅ Admin route to get all providers (Protected: only admin can access)
router.get('/all', verifyToken(['admin']), getAllProviders);

module.exports = router;
