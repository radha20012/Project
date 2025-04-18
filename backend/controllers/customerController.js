// // backend/controllers/customerController.js

// exports.getUserDashboard = (req, res) => {
//     res.json({ message: 'Welcome to the User Dashboard' });
//   };
const User = require('../models/User');
const Service = require('../models/Service');

// @desc    Get User Dashboard Details
// @route   GET /api/user/dashboard
// @access  Private (User only)
exports.getUserDashboard = async (req, res) => {
  try {
    const userId = req.user._id;

    // Fetch user profile (excluding password)
    const userProfile = await User.findById(userId).select('-password -__v').lean();

    if (!userProfile) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // (Optional) Fetch any services booked by this user if such relation exists
    // const myServices = await Service.find({ bookedBy: userId }).lean();

    res.status(200).json({
      success: true,
      message: 'Welcome to the User Dashboard',
      user: userProfile,
      // myServices, // Uncomment if service booking implemented
    });
  } catch (error) {
    console.error('Error loading user dashboard:', error.message);
    res.status(500).json({ success: false, message: 'Failed to load user dashboard' });
  }
};
