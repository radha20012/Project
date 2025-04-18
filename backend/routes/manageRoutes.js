
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User'); // Adjust path if needed

// Utility: Check for valid MongoDB ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

/* =====================================
   USER ROUTES - Admin Manage Users
===================================== */

// 🔹 GET all users (role: user)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({ role: 'user' });
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({ message: 'Server error fetching users' });
  }
});

// 🔹 DELETE user by ID
router.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;

  if (!isValidObjectId(userId)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err.message);
    res.status(500).json({ message: 'Error deleting user' });
  }
});

// 🔹 UPDATE user by ID
router.put('/users/:id', async (req, res) => {
  const userId = req.params.id;

  if (!isValidObjectId(userId)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error('Error updating user:', err.message);
    res.status(500).json({ message: 'Error updating user' });
  }
});

/* =========================================
   PROVIDER ROUTES - Admin Manage Providers
========================================= */

// 🔸 GET all providers (role: provider)
router.get('/providers', async (req, res) => {
  try {
    const providers = await User.find({ role: 'provider' });
    res.status(200).json(providers);
  } catch (err) {
    console.error('Error fetching providers:', err.message);
    res.status(500).json({ message: 'Server error fetching providers' });
  }
});

// 🔸 DELETE provider by ID
router.delete('/providers/:id', async (req, res) => {
  const providerId = req.params.id;

  if (!isValidObjectId(providerId)) {
    return res.status(400).json({ message: 'Invalid provider ID' });
  }

  try {
    const deletedProvider = await User.findByIdAndDelete(providerId);
    if (!deletedProvider) return res.status(404).json({ message: 'Provider not found' });

    res.status(200).json({ message: 'Provider deleted successfully' });
  } catch (err) {
    console.error('Error deleting provider:', err.message);
    res.status(500).json({ message: 'Error deleting provider' });
  }
});

// 🔸 UPDATE provider by ID
router.put('/providers/:id', async (req, res) => {
  const providerId = req.params.id;

  if (!isValidObjectId(providerId)) {
    return res.status(400).json({ message: 'Invalid provider ID' });
  }

  try {
    const updatedProvider = await User.findByIdAndUpdate(providerId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProvider) return res.status(404).json({ message: 'Provider not found' });

    res.status(200).json(updatedProvider);
  } catch (err) {
    console.error('Error updating provider:', err.message);
    res.status(500).json({ message: 'Error updating provider' });
  }
});

module.exports = router;
