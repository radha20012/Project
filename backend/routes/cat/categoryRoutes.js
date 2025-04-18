
const express = require('express');
const router = express.Router();
const Category = require('../../models/Category'); // Make sure you create this model

// @route   POST /api/categories/add
// @desc    Add a new category
router.post('/add', async (req, res) => {
  try {
    const { name, description } = req.body;

    const existing = await Category.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const newCategory = new Category({ name, description });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// @route   GET /api/categories/all
// @desc    Get all categories
router.get('/all', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// @route   PUT /api/categories/update/:id
// @desc    Update a category
router.put('/update/:id', async (req, res) => {
  const categoryId = req.params.id;
  const { name, description } = req.body;

  try {
    // Find the category by ID and update it
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { name, description },
      { new: true } // this option returns the updated document
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// @route   DELETE /api/categories/delete/:id
// @desc    Delete a category
router.delete('/delete/:id', async (req, res) => {
  const categoryId = req.params.id;

  try {
    // Find the category by ID and delete it
    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json({ message: 'Category deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

module.exports = router;