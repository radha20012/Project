
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { getAdminDashboard } = require('../controllers/adminController');
const Category = require('../models/Category');

// ------------------ Admin Dashboard Route ------------------ //
router.get('/dashboard', verifyToken(['admin']), getAdminDashboard);

// ------------------ Category CRUD ------------------ //

// GET all categories
router.get('/categories', verifyToken(['admin']), async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// POST add category
router.post('/categories', verifyToken(['admin']), async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// PUT update category
router.put('/categories/:id', verifyToken(['admin']), async (req, res) => {
  try {
    const { name } = req.body;
    const updated = await Category.findByIdAndUpdate(req.params.id, { name }, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// DELETE category
router.delete('/categories/:id', verifyToken(['admin']), async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
