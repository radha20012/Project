
const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// ==============================
// @route   GET /api/service/all
// @desc    Fetch all services
// @access  Public
// ==============================
router.get('/all', async (req, res) => {
  try {
    const services = await Service.find().populate('provider', 'name email');
    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Server error while fetching services' });
  }
});

// ==============================
// @route   POST /api/service/add
// @desc    Add a new service
// @access  Public / Provider (token middleware can be added later)
// ==============================
router.post('/add', async (req, res) => {
  try {
    const { title, description, price, category, provider, city, pincode } = req.body;

    // Basic validation
    if (!title || !description || !price || !category || !provider || !city || !pincode) {
      return res.status(400).json({ message: 'All fields are required (including city & pincode)' });
    }

    const newService = new Service({
      title,
      description,
      price,
      category,
      provider,
      city,
      pincode
    });

    const savedService = await newService.save();
    res.status(201).json({ message: 'Service created successfully', service: savedService });
  } catch (error) {
    console.error('Error adding service:', error);
    res.status(500).json({ message: 'Server error while adding service' });
  }
});

// ==============================
// @route   DELETE /api/service/:id
// @desc    Delete a service by ID
// @access  Public / Admin or Provider (token middleware can be added)
// ==============================
router.delete('/:id', async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ message: 'Server error while deleting service' });
  }
});

// ==============================
// @route   GET /api/service/by-provider/:providerId
// @desc    Get all services of a specific provider
// @access  Public (can be secured later)
// ==============================
router.get('/by-provider/:providerId', async (req, res) => {
  try {
    const { providerId } = req.params;

    const services = await Service.find({ provider: providerId });

    if (!services.length) {
      return res.status(404).json({ message: 'No services found for this provider' });
    }

    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching provider services:', error);
    res.status(500).json({ message: 'Server error while fetching provider services' });
  }
});

module.exports = router;
