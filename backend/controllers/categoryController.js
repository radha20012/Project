// controllers/categoryController.js
const Category = require('../models/categoryModel');

const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(id, { name }, { new: true });
    res.status(200).json(updatedCategory);
  } catch (err) {
    console.error("Update error", err);
    res.status(500).json({ message: "Server error while updating category" });
  }
};