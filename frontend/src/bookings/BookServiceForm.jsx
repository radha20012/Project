import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookServiceForm = () => {
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/services')
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleBooking = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId || !selectedServiceId) return;

    try {
      const res = await axios.post('/api/bookings', {
        userId,
        serviceId: selectedServiceId
      });
      setMessage('Booking request submitted successfully!');
    } catch (err) {
      console.error(err);
      setMessage('Failed to submit booking request.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Book a Service</h2>
      <select value={selectedServiceId} onChange={e => setSelectedServiceId(e.target.value)}>
        <option value=''>Select a Service</option>
        {services.map(service => (
          <option key={service._id} value={service._id}>{service.name}</option>
        ))}
      </select>
      <button onClick={handleBooking} style={{ marginLeft: '10px' }}>Book</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookServiceForm;
