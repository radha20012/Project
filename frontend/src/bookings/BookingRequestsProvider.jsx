import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingRequestProvider = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const providerId = localStorage.getItem('providerId');
    if (!providerId) return;

    axios.get(`/api/bookings/provider/${providerId}`)
      .then(res => setBookings(res.data))
      .catch(err => console.error('Error fetching bookings:', err));
  }, []);

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      await axios.put(`/api/bookings/${bookingId}/status`, { status: newStatus });
      setBookings(prev =>
        prev.map(booking =>
          booking._id === bookingId ? { ...booking, status: newStatus } : booking
        )
      );
    } catch (err) {
      console.error('Error updating booking status:', err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Booking Requests</h2>
      {bookings.length === 0 ? (
        <p>No booking requests found.</p>
      ) : (
        <ul>
          {bookings.map(booking => (
            <li key={booking._id} style={{ marginBottom: '20px' }}>
              <p><strong>Service:</strong> {booking.serviceName}</p>
              <p><strong>Requested by:</strong> {booking.userName}</p>
              <p><strong>Status:</strong> {booking.status}</p>
              {booking.status === 'Pending' && (
                <>
                  <button onClick={() => handleStatusChange(booking._id, 'Approved')} style={{ marginRight: '10px' }}>Approve</button>
                  <button onClick={() => handleStatusChange(booking._id, 'Rejected')}>Reject</button>
                </>
              )}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingRequestProvider;
