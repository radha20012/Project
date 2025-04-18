// // // // // // import React from 'react';

// // // // // // const BookService = () => {
// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h2>Book a Service</h2>
// // // // // //       <p>This is the booking page for users.</p>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // // Make sure to export as default
// // // // // // export default BookService;
// // // // // import React, { useState } from 'react';

// // // // // const BookService = () => {
// // // // //   const [serviceDetails, setServiceDetails] = useState({
// // // // //     title: "Service Title", // Replace with actual data passed from BrowseServices
// // // // //     price: 500, // Replace with actual price
// // // // //   });
  
// // // // //   const handleBooking = () => {
// // // // //     alert(`Service booked: ${serviceDetails.title}`);
// // // // //     // Here you can implement logic to proceed with payment or confirmation
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ padding: '20px' }}>
// // // // //       <h2>Booking Service</h2>
// // // // //       <h3>{serviceDetails.title}</h3>
// // // // //       <p><strong>Price:</strong> ₹{serviceDetails.price}</p>
// // // // //       <button onClick={handleBooking} style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff' }}>
// // // // //         Confirm Booking
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default BookService;
// // // // import React, { useEffect, useState } from 'react';
// // // // import axios from 'axios';
// // // // import { useParams } from 'react-router-dom';

// // // // const BookService = () => {
// // // //   const { serviceId } = useParams();  // Fetch the service ID from the URL
// // // //   const [serviceDetails, setServiceDetails] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchServiceDetails = async () => {
// // // //       try {
// // // //         const response = await axios.get(`http://localhost:5000/api/service/${serviceId}`);
// // // //         setServiceDetails(response.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching service details:', error);
// // // //       }
// // // //     };

// // // //     fetchServiceDetails();
// // // //   }, [serviceId]);

// // // //   const handleBooking = () => {
// // // //     alert(`Service booked: ${serviceDetails.title}`);
// // // //     // Implement booking logic (e.g., payment, confirmation, etc.)
// // // //   };

// // // //   if (!serviceDetails) {
// // // //     return <p>Loading...</p>;
// // // //   }

// // // //   return (
// // // //     <div style={{ padding: '20px' }}>
// // // //       <h2>Booking Service: {serviceDetails.title}</h2>
// // // //       <p><strong>Price:</strong> ₹{serviceDetails.price}</p>
// // // //       <p><strong>Description:</strong> {serviceDetails.description}</p>
// // // //       <button onClick={handleBooking} style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff' }}>
// // // //         Confirm Booking
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BookService;
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { useParams, useNavigate } from 'react-router-dom';

// // // const BookService = () => {
// // //   const { serviceId } = useParams();  // Getting the serviceId from the URL
// // //   const [service, setService] = useState(null);
// // //   const [bookingDetails, setBookingDetails] = useState({
// // //     name: '',
// // //     email: '',
// // //     phone: '',
// // //   });
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     // Fetch the service details based on the serviceId
// // //     const fetchServiceDetails = async () => {
// // //       try {
// // //         const response = await axios.get(`http://localhost:5000/api/service/${serviceId}`);
// // //         setService(response.data);
// // //       } catch (error) {
// // //         console.error('Error fetching service details', error);
// // //       }
// // //     };
// // //     fetchServiceDetails();
// // //   }, [serviceId]);

// // //   const handleBookingChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setBookingDetails({ ...bookingDetails, [name]: value });
// // //   };

// // //   const handleBookService = async () => {
// // //     try {
// // //       // Send booking request to the backend
// // //       await axios.post(`http://localhost:5000/api/booking`, {
// // //         ...bookingDetails,
// // //         serviceId,
// // //       });
// // //       alert('Service booked successfully!');
// // //       navigate('/user/orders');  // Redirect to the orders page
// // //     } catch (error) {
// // //       console.error('Error booking service', error);
// // //       alert('Failed to book service. Please try again.');
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ padding: '20px' }}>
// // //       {service ? (
// // //         <>
// // //           <h2>Book Service: {service.title}</h2>
// // //           <p><strong>Category:</strong> {service.category}</p>
// // //           <p><strong>Price:</strong> ₹{service.price}</p>
// // //           <p><strong>Description:</strong> {service.description}</p>

// // //           <h3>Booking Details</h3>
// // //           <form>
// // //             <input
// // //               type="text"
// // //               name="name"
// // //               value={bookingDetails.name}
// // //               onChange={handleBookingChange}
// // //               placeholder="Name"
// // //               required
// // //               style={{ padding: '8px', margin: '10px', width: '100%' }}
// // //             />
// // //             <input
// // //               type="email"
// // //               name="email"
// // //               value={bookingDetails.email}
// // //               onChange={handleBookingChange}
// // //               placeholder="Email"
// // //               required
// // //               style={{ padding: '8px', margin: '10px', width: '100%' }}
// // //             />
// // //             <input
// // //               type="phone"
// // //               name="phone"
// // //               value={bookingDetails.phone}
// // //               onChange={handleBookingChange}
// // //               placeholder="Phone Number"
// // //               required
// // //               style={{ padding: '8px', margin: '10px', width: '100%' }}
// // //             />
// // //             <button
// // //               type="button"
// // //               onClick={handleBookService}
// // //               style={{
// // //                 padding: '10px',
// // //                 backgroundColor: '#28a745',
// // //                 color: '#fff',
// // //                 border: 'none',
// // //                 borderRadius: '4px',
// // //                 cursor: 'pointer',
// // //                 marginTop: '10px',
// // //               }}
// // //             >
// // //               Book Now
// // //             </button>
// // //           </form>
// // //         </>
// // //       ) : (
// // //         <p>Loading service details...</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default BookService;
// // import React, { useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const BookService = () => {
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const placeOrder = async () => {
// //       const cart = JSON.parse(localStorage.getItem('latestOrder'));
// //       const userId = localStorage.getItem('userId'); // assuming you're storing this

// //       try {
// //         const response = await axios.post('http://localhost:5000/api/orders', {
// //           user: userId,
// //           services: cart,
// //           paymentMode: 'COD',
// //           status: 'Pending',
// //         });

// //         if (response.status === 200) {
// //           localStorage.removeItem('cart'); // Clear cart
// //           navigate('/orders'); // Go to My Orders page
// //         }
// //       } catch (error) {
// //         console.error('Order booking failed', error);
// //       }
// //     };

// //     placeOrder();
// //   }, []);

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h2>Booking your service...</h2>
// //     </div>
// //   );
// // };

// // export default BookService;
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const BookService = () => {
//   const { serviceId } = useParams();
//   const navigate = useNavigate();
//   const [service, setService] = useState(null);
//   const [userId, setUserId] = useState('');
//   const [providerId, setProviderId] = useState('');
//   const [date, setDate] = useState('');
//   const [message, setMessage] = useState('');

//   // Load service details
//   useEffect(() => {
//     const fetchService = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/service/${serviceId}`);
//         setService(res.data);
//         setProviderId(res.data.provider?._id || '');
//       } catch (err) {
//         console.error('Error fetching service details:', err);
//       }
//     };

//     fetchService();

//     // Load userId from localStorage or auth
//     const userData = JSON.parse(localStorage.getItem('user'));
//     if (userData && userData._id) {
//       setUserId(userData._id);
//     }
//   }, [serviceId]);

//   const handleBooking = async () => {
//     if (!userId || !providerId) {
//       alert('Missing user or provider info');
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:5000/api/bookings', {
//         serviceId,
//         providerId,
//         userId,
//         date,
//       });

//       setMessage(res.data.message || 'Booking successful!');
//       alert('Booking request sent!');
//       navigate('/'); // Redirect to home or confirmation
//     } catch (err) {
//       console.error('Booking failed:', err.response?.data || err.message);
//       setMessage('Booking failed. Please try again.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Book Service</h2>

//       {service ? (
//         <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
//           <h3>{service.title}</h3>
//           <p><strong>Category:</strong> {service.category}</p>
//           <p><strong>Description:</strong> {service.description}</p>
//           <p><strong>Price:</strong> ₹{service.price}</p>
//           <p><strong>Provider:</strong> {service.provider?.name || 'N/A'}</p>

//           <label>
//             Select Booking Date: &nbsp;
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               style={{ padding: '6px', marginTop: '10px' }}
//             />
//           </label>

//           <br /><br />

//           <button
//             onClick={handleBooking}
//             style={{
//               padding: '10px 20px',
//               backgroundColor: '#007bff',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             Confirm Booking
//           </button>
//         </div>
//       ) : (
//         <p>Loading service details...</p>
//       )}

//       {message && <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>}
//     </div>
//   );
// };

// export default BookService;
