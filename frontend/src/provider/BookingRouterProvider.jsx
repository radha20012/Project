
import React, { useState } from 'react';
import axios from 'axios';

const BookingRouterProvider = () => {
  const [bookings, setBookings] = useState([]);
  const [providerId, setProviderId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchBookings = async () => {
    if (!providerId) {
      setError('Please enter a Provider ID.');
      return;
    }

    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/api/bookings/provider/${providerId}`);
      setBookings(res.data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to fetch bookings.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (bookingId, action) => {
    try {
      const endpoint = `http://localhost:5000/api/bookings/${bookingId}/${action}`;
      await axios.patch(endpoint);
      const updated = bookings.map(booking =>
        booking._id === bookingId ? { ...booking, status: action === 'approve' ? 'approved' : 'rejected' } : booking
      );
      setBookings(updated);
    } catch (err) {
      console.error('Failed to update status:', err);
      alert('Error updating booking status.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Provider Booking Status</h2>

      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Enter Provider ID"
          value={providerId}
          onChange={(e) => setProviderId(e.target.value)}
          style={{ padding: '10px', width: '60%', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button
          onClick={fetchBookings}
          style={{
            marginLeft: '10px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Get Bookings
        </button>
      </div>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : bookings.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No bookings found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={cellStyle}>User</th>
              <th style={cellStyle}>Service</th>
              <th style={cellStyle}>Status</th>
              <th style={cellStyle}>Date</th>
              <th style={cellStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td style={cellStyle}>{booking.userId?.name || 'N/A'}</td>
                <td style={cellStyle}>{booking.serviceId?.title || 'N/A'}</td>
                <td style={cellStyle}>
                  <span style={{ color: booking.status === 'approved' ? 'green' : booking.status === 'rejected' ? 'red' : 'gray' }}>
                    {booking.status.toUpperCase()}
                  </span>
                </td>
                <td style={cellStyle}>{new Date(booking.createdAt).toLocaleDateString()}</td>
                <td style={cellStyle}>
                  {booking.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleStatusUpdate(booking._id, 'approve')}
                        style={{ ...btnStyle, backgroundColor: 'green' }}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleStatusUpdate(booking._id, 'reject')}
                        style={{ ...btnStyle, backgroundColor: 'red' }}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const cellStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'left',
};

const btnStyle = {
  color: '#fff',
  border: 'none',
  padding: '6px 12px',
  marginRight: '6px',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default BookingRouterProvider;
