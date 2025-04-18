const mongoose = require('mongoose');
const Provider = require('../models/Provider');

// MongoDB connection (check your DB name if different)
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const updateRoles = async () => {
  try {
    // Update all documents that don't have a role field
    await Provider.updateMany(
      { role: { $exists: false } },
      { $set: { role: 'provider' } }
    );
    console.log('All providers updated with role');
    process.exit();
  } catch (error) {
    console.error('Error updating roles:', error);
    process.exit(1);
  }
};

updateRoles();
