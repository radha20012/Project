const Provider = require('../models/Provider');
const Service = require('../models/Service');
const User = require('../models/User');

// @desc    Get Provider Dashboard Details
// @route   GET /api/provider/dashboard
// @access  Private (Provider only)
const getProviderDashboard = async (req, res) => {
  try {
    const providerId = req.user.id;

    // Get services posted by this provider
    const services = await Service.find({ providerId });

    // Get provider profile (excluding password)
    const providerProfile = await Provider.findById(providerId).select('-password');

    // Count total users and providers (optional: only if needed on provider dashboard)
    const totalUsers = await User.countDocuments();
    const totalProviders = await Provider.countDocuments();

    res.status(200).json({
      message: 'Welcome to the Service Provider Dashboard',
      provider: providerProfile,
      totalServices: services.length,
      services,
      totalUsers,
      totalProviders,
    });
  } catch (error) {
    console.error('Error loading provider dashboard:', error.message);
    res.status(500).json({ message: 'Failed to load provider dashboard' });
  }
};

// @desc    Get All Providers (for Admin Dashboard)
// @route   GET /api/provider/all
// @access  Private (Admin only)
const getAllProviders = async (req, res) => {
  try {
    const providers = await Provider.find().select('-password');
    res.status(200).json(providers);
  } catch (error) {
    console.error('Error fetching providers:', error.message);
    res.status(500).json({ message: 'Failed to fetch providers' });
  }
};

module.exports = {
  getProviderDashboard,
  getAllProviders,
};
