
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// Create a new booking
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get bookings for a provider
router.get("/provider/:providerId", async (req, res) => {
  try {
    const bookings = await Booking.find({ providerId: req.params.providerId }).populate("userId serviceId");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Approve a booking
router.patch("/:id/approve", async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: "approved" }, { new: true });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Reject a booking
router.patch("/:id/reject", async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: "rejected" }, { new: true });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Get bookings by user ID
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const bookings = await Booking.find({ userId })
      .populate('serviceId')
      .populate('providerId');
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});


module.exports = router;
