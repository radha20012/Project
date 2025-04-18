
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingListUser = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      setError('User not logged in.');
      return;
    }

    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/bookings/user/${userId}`);
        setBookings(response.data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
        setError('Unable to load bookings.');
      }
    };

    fetchBookings();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Bookings</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!error && bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              <strong>Service:</strong> {booking.serviceName} <br />
              <strong>Status:</strong> {booking.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingListUser;
