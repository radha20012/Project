// // // // import React from "react";

// // // // const BookingServiceForm = () => {
// // // //   return (
// // // //     <div>
// // // //       <h2>Book a Service</h2>
// // // //       <p>Booking form goes here.</p>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BookingServiceForm;
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const BookServiceForm = () => {
// // //   const [services, setServices] = useState([]);
// // //   const [selectedServiceId, setSelectedServiceId] = useState('');
// // //   const [message, setMessage] = useState('');

// // //   useEffect(() => {
// // //     axios.get('/api/services')
// // //       .then(res => setServices(res.data))
// // //       .catch(err => console.error(err));
// // //   }, []);

// // //   const handleBooking = async () => {
// // //     const userId = localStorage.getItem('userId');
// // //     if (!userId || !selectedServiceId) return;

// // //     try {
// // //       const res = await axios.post('/api/bookings', {
// // //         userId,
// // //         serviceId: selectedServiceId
// // //       });
// // //       setMessage('Booking request submitted successfully!');
// // //     } catch (err) {
// // //       console.error(err);
// // //       setMessage('Failed to submit booking request.');
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ padding: '20px' }}>
// // //       <h2>Book a Service</h2>
// // //       <select value={selectedServiceId} onChange={e => setSelectedServiceId(e.target.value)}>
// // //         <option value=''>Select a Service</option>
// // //         {services.map(service => (
// // //           <option key={service._id} value={service._id}>{service.name}</option>
// // //         ))}
// // //       </select>
// // //       <button onClick={handleBooking} style={{ marginLeft: '10px' }}>Book</button>
// // //       {message && <p>{message}</p>}
// // //     </div>
// // //   );
// // // };

// // // export default BookServiceForm;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const BookingServiceForm = () => {
// //   const [services, setServices] = useState([]);
// //   const [selectedService, setSelectedService] = useState('');
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchServices = async () => {
// //       try {
// //         const response = await axios.get('/api/services');
// //         if (Array.isArray(response.data)) {
// //           setServices(response.data);
// //         } else {
// //           setError('Failed to load services');
// //         }
// //       } catch (err) {
// //         setError('Failed to load services');
// //       }
// //     };

// //     fetchServices();
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!selectedService) {
// //       setError('Please select a service');
// //       return;
// //     }

// //     try {
// //       const bookingData = {
// //         providerId: 'yourProviderId', // Pass the actual providerId
// //         userId: 'yourUserId', // Pass the actual userId
// //         serviceId: selectedService,
// //         status: 'pending',
// //       };

// //       await axios.post('/api/bookings', bookingData);
// //       setError(null);
// //       alert('Booking created successfully');
// //     } catch (err) {
// //       setError('Failed to create booking');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h3>Book a Service</h3>
// //       <form onSubmit={handleSubmit}>
// //         <label>Select Service</label>
// //         <select
// //           value={selectedService}
// //           onChange={(e) => setSelectedService(e.target.value)}
// //         >
// //           <option value="">Select a service</option>
// //           {services.length > 0 ? (
// //             services.map((service) => (
// //               <option key={service._id} value={service._id}>
// //                 {service.name}
// //               </option>
// //             ))
// //           ) : (
// //             <option value="">No services available</option>
// //           )}
// //         </select>
// //         <button type="submit">Book Service</button>
// //       </form>
// //       {error && <p>{error}</p>}
// //     </div>
// //   );
// // };

// // export default BookingServiceForm;
// import React, { useState } from "react";
// import axios from "axios";

// const BookingServiceForm = ({ serviceId, providerId }) => {
//   const [bookingDate, setBookingDate] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleBooking = async (e) => {
//     e.preventDefault();

//     if (!bookingDate) {
//       setError("Please select a booking date.");
//       return;
//     }

//     const requestData = {
//       userId: "user_id_here",  // Replace with actual user ID from the context or state
//       providerId,
//       serviceId,
//       bookingDate,
//     };

//     try {
//       const response = await axios.post("http://localhost:5000/api/booking", requestData);
//       setSuccess("Booking request sent successfully.");
//       setBookingDate("");
//       setError("");
//     } catch (error) {
//       setError("Error sending booking request.");
//     }
//   };

//   return (
//     <div>
//       <h2>Book a Service</h2>
//       <form onSubmit={handleBooking}>
//         <div>
//           <label>Booking Date</label>
//           <input
//             type="datetime-local"
//             value={bookingDate}
//             onChange={(e) => setBookingDate(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Send Booking Request</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {success && <p style={{ color: "green" }}>{success}</p>}
//     </div>
//   );
// };

// export default BookingServiceForm;
import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    providerId: '',
    serviceId: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/bookings', formData);
      alert('Booking created!');
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert('Booking failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="userId" placeholder="User ID" onChange={handleChange} required />
      <input name="providerId" placeholder="Provider ID" onChange={handleChange} required />
      <input name="serviceId" placeholder="Service ID" onChange={handleChange} required />
      <input name="date" type="date" onChange={handleChange} required />
      <input name="time" type="time" onChange={handleChange} required />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
