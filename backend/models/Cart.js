const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // User reference to associate the cart with a specific user
      required: true,
    },
    items: [
      {
        serviceId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Service', // Reference to the Service model
          required: true,
        },
        providerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Provider', // Reference to the Provider model
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
