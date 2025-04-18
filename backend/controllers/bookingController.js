
const Booking = require('../models/Booking');

// Create a new booking
const createBooking = async ({ serviceId, providerId, userId, date }) => {
  try {
    const newBooking = new Booking({
      service: serviceId,
      provider: providerId,
      user: userId,
      date: date || new Date(),
      status: 'pending', // Status is 'pending' by default, awaiting provider's approval/rejection
    });

    const savedBooking = await newBooking.save();
    return savedBooking;
  } catch (error) {
    console.error('❌ Error creating booking:', error.message);
    throw new Error('Booking creation failed');
  }
};

// Get all bookings for a specific user
const getUserBookings = async (userId) => {
  try {
    const bookings = await Booking.find({ user: userId })
      .populate('service')   // Populate service details
      .populate('provider')  // Populate provider details
      .exec();
    return bookings;
  } catch (error) {
    console.error('❌ Error fetching user bookings:', error.message);
    throw new Error('Could not fetch user bookings');
  }
};

// Approve a booking (Only the provider can approve)
const approveBooking = async (req, res) => {
  const { bookingId } = req.params;
  
  try {
    const booking = await Booking.findById(bookingId);
    
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    // Only the provider can approve
    if (booking.provider.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    booking.status = 'approved';
    await booking.save();
    
    return res.status(200).json({ success: true, message: 'Booking approved', booking });
  } catch (error) {
    console.error('Error approving booking:', error.message);
    return res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Reject a booking (Only the provider can reject)
const rejectBooking = async (req, res) => {
  const { bookingId } = req.params;
  
  try {
    const booking = await Booking.findById(bookingId);
    
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    // Only the provider can reject
    if (booking.provider.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    booking.status = 'rejected';
    await booking.save();
    
    return res.status(200).json({ success: true, message: 'Booking rejected', booking });
  } catch (error) {
    console.error('Error rejecting booking:', error.message);
    return res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Fetch all pending bookings for a provider
const getPendingBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ provider: req.user.id, status: 'pending' })
      .populate('service user');
    
    return res.status(200).json({ success: true, bookings });
  } catch (error) {
    console.error('Error fetching pending bookings:', error.message);
    return res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

module.exports = {
  createBooking,
  getUserBookings,
  approveBooking,
  rejectBooking,
  getPendingBookings,
};
