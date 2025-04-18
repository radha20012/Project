// exports.getAdminDashboard = (req, res) => {
//     res.json({ message: 'Welcome to the Admin Dashboard' });
//   };
  
const User = require('../models/User');
const Provider = require('../models/Provider');
const Service = require('../models/Service');

exports.getAdminDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: 'user' });
    const totalProviders = await Provider.countDocuments({ role: 'provider' });
    const totalServices = await Service.countDocuments();

    res.json({
      message: 'Welcome to the Admin Dashboard',
      totalUsers,
      totalProviders,
      totalServices,
    });
  } catch (error) {
    console.error('Error in Admin Dashboard:', error);
    res.status(500).json({ message: 'Failed to load admin dashboard data' });
  }
};
