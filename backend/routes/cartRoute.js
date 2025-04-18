const express = require('express');
const Cart = require('../models/Cart');
const { authenticateUser } = require('../middleware/authenticate'); // Middleware to verify user authentication

const router = express.Router();

// Add service to the cart
router.post('/cart', authenticateUser, async (req, res) => {
  const { serviceId, providerId, price, quantity } = req.body;
  const userId = req.user._id; // User ID from authentication

  try {
    // Find existing cart for the user
    let cart = await Cart.findOne({ userId });

    // If no cart exists, create a new cart
    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ serviceId, providerId, price, quantity }],
      });
    } else {
      // If cart exists, check if the item is already in the cart
      const existingItemIndex = cart.items.findIndex(
        (item) => item.serviceId.toString() === serviceId && item.providerId.toString() === providerId
      );

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        // Add new item to the cart
        cart.items.push({ serviceId, providerId, price, quantity });
      }
    }

    await cart.save(); // Save the cart to the database
    res.status(201).json({ message: 'Service added to cart', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding service to cart' });
  }
});

// Remove service from the cart
router.delete('/cart/:serviceId', authenticateUser, async (req, res) => {
  const { serviceId } = req.params;
  const userId = req.user._id; // User ID from authentication

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Remove the item from the cart
    cart.items = cart.items.filter((item) => item.serviceId.toString() !== serviceId);

    await cart.save(); // Save the updated cart
    res.status(200).json({ message: 'Service removed from cart', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error removing service from cart' });
  }
});

// Get cart for the logged-in user
router.get('/cart', authenticateUser, async (req, res) => {
  const userId = req.user._id; // User ID from authentication

  try {
    const cart = await Cart.findOne({ userId }).populate('items.serviceId').populate('items.providerId');

    if (!cart) {
      return res.status(404).json({ message: 'Cart is empty' });
    }

    res.status(200).json({ cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching cart' });
  }
});

module.exports = router;
