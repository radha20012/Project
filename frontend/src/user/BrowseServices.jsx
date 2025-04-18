// // // // // // // // import React from 'react';

// // // // // // // // const BrowseServices = () => {
// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <h2>Browse Services</h2>
// // // // // // // //       <p>This is a placeholder for service listings. You can show all available services here.</p>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default BrowseServices;
// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import axios from 'axios';

// // // // // // // const BrowseServices = () => {
// // // // // // //   const [services, setServices] = useState([]);

// // // // // // //   useEffect(() => {
// // // // // // //     fetchServices();
// // // // // // //   }, []);

// // // // // // //   const fetchServices = async () => {
// // // // // // //     try {
// // // // // // //       const response = await axios.get('http://localhost:5000/api/services');
// // // // // // //       setServices(response.data);
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Error fetching services:', error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={styles.container}>
// // // // // // //       <h2 style={styles.heading}>Available Services</h2>
// // // // // // //       <div style={styles.grid}>
// // // // // // //         {services.length === 0 ? (
// // // // // // //           <p>No services found.</p>
// // // // // // //         ) : (
// // // // // // //           services.map((service) => (
// // // // // // //             <div key={service._id} style={styles.card}>
// // // // // // //               <h3>{service.name}</h3>
// // // // // // //               <p>{service.description}</p>
// // // // // // //               <p><strong>Category:</strong> {service.category}</p>
// // // // // // //               <p><strong>Price:</strong> ₹{service.price}</p>
// // // // // // //             </div>
// // // // // // //           ))
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = {
// // // // // // //   container: {
// // // // // // //     padding: '20px',
// // // // // // //   },
// // // // // // //   heading: {
// // // // // // //     textAlign: 'center',
// // // // // // //     marginBottom: '20px',
// // // // // // //   },
// // // // // // //   grid: {
// // // // // // //     display: 'grid',
// // // // // // //     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
// // // // // // //     gap: '20px',
// // // // // // //   },
// // // // // // //   card: {
// // // // // // //     border: '1px solid #ddd',
// // // // // // //     borderRadius: '8px',
// // // // // // //     padding: '15px',
// // // // // // //     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
// // // // // // //     backgroundColor: '#fff',
// // // // // // //   },
// // // // // // // };

// // // // // // // export default BrowseServices;
// // // // // // // src/user/BrowseServices.jsx
// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import axios from 'axios';

// // // // // // const BrowseServices = () => {
// // // // // //   const [services, setServices] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     const fetchServices = async () => {
// // // // // //       try {
// // // // // //         const token = localStorage.getItem('token');
// // // // // //         const res = await axios.get('http://localhost:5000/api/service/all', {
// // // // // //           headers: {
// // // // // //             Authorization: `Bearer ${token}`,
// // // // // //           },
// // // // // //         });
// // // // // //         setServices(res.data.services);
// // // // // //       } catch (err) {
// // // // // //         console.error(err);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchServices();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h2>Available Services</h2>
// // // // // //       {services.length === 0 ? (
// // // // // //         <p>No services found.</p>
// // // // // //       ) : (
// // // // // //         <ul>
// // // // // //           {services.map((service) => (
// // // // // //             <li key={service._id}>
// // // // // //               <h4>{service.title}</h4>
// // // // // //               <p>{service.description}</p>
// // // // // //               <p><b>Price:</b> ₹{service.price}</p>
// // // // // //               <p><b>Category:</b> {service.category}</p>
// // // // // //             </li>
// // // // // //           ))}
// // // // // //         </ul>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default BrowseServices;
// // // // // import React, { useEffect, useState } from 'react';
// // // // // import axios from 'axios';

// // // // // const BrowseServices = () => {
// // // // //   const [services, setServices] = useState([]);
// // // // //   const [error, setError] = useState('');

// // // // //   const fetchServices = async () => {
// // // // //     try {
// // // // //       const response = await axios.get('http://localhost:5000/api/service/all');
// // // // //       setServices(response.data);
// // // // //     } catch (err) {
// // // // //       console.error('Error fetching services:', err);
// // // // //       setError('Failed to load services. Please try again later.');
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchServices();
// // // // //   }, []);

// // // // //   return (
// // // // //     <div style={{ padding: '20px' }}>
// // // // //       <h2>Available Services</h2>
// // // // //       {error && <p style={{ color: 'red' }}>{error}</p>}
// // // // //       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
// // // // //         {services.length > 0 ? (
// // // // //           services.map((service) => (
// // // // //             <div
// // // // //               key={service._id}
// // // // //               style={{
// // // // //                 border: '1px solid #ccc',
// // // // //                 borderRadius: '8px',
// // // // //                 padding: '16px',
// // // // //                 width: '250px',
// // // // //                 boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
// // // // //               }}
// // // // //             >
// // // // //               <h3>{service.title}</h3>
// // // // //               <p><strong>Category:</strong> {service.category}</p>
// // // // //               <p><strong>Description:</strong> {service.description}</p>
// // // // //               <p><strong>Price:</strong> ₹{service.price}</p>
// // // // //               {service.provider && (
// // // // //                 <p><strong>Provider:</strong> {service.provider.name || 'N/A'}</p>
// // // // //               )}
// // // // //             </div>
// // // // //           ))
// // // // //         ) : (
// // // // //           <p>No services available.</p>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default BrowseServices;
// // // // import React, { useEffect, useState } from 'react';
// // // // import axios from 'axios';

// // // // const BrowseServices = () => {
// // // //   const [services, setServices] = useState([]);
// // // //   const [error, setError] = useState('');

// // // //   const fetchServices = async () => {
// // // //     try {
// // // //       const response = await axios.get('http://localhost:5000/api/service/all');
// // // //       setServices(response.data);
// // // //     } catch (err) {
// // // //       console.error('Error fetching services:', err);
// // // //       setError('Failed to load services. Please try again later.');
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchServices();
// // // //   }, []);

// // // //   return (
// // // //     <div style={{ padding: '20px' }}>
// // // //       <h2>Available Services</h2>
// // // //       {error && <p style={{ color: 'red' }}>{error}</p>}
// // // //       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
// // // //         {services.length > 0 ? (
// // // //           services.map((service) => (
// // // //             <div
// // // //               key={service._id}
// // // //               style={{
// // // //                 border: '1px solid #ccc',
// // // //                 borderRadius: '8px',
// // // //                 padding: '16px',
// // // //                 width: '250px',
// // // //                 boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
// // // //               }}
// // // //             >
// // // //               <h3>{service.title}</h3>
// // // //               <p><strong>Category:</strong> {service.category}</p>
// // // //               <p><strong>Description:</strong> {service.description}</p>
// // // //               <p><strong>Price:</strong> ₹{service.price}</p>
              
// // // //               {/* New details: State, City, Pincode, and Phone Number */}
// // // //               {service.state && <p><strong>State:</strong> {service.state}</p>}
// // // //               {service.city && <p><strong>City:</strong> {service.city}</p>}
// // // //               {service.pincode && <p><strong>Pincode:</strong> {service.pincode}</p>}
// // // //               {service.phoneNumber && <p><strong>Phone Number:</strong> {service.phoneNumber}</p>}

// // // //               {service.provider && (
// // // //                 <p><strong>Provider:</strong> {service.provider.name || 'N/A'}</p>
// // // //               )}
// // // //             </div>
// // // //           ))
// // // //         ) : (
// // // //           <p>No services available.</p>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BrowseServices;
// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';

// // // const BrowseServices = () => {
// // //   const [services, setServices] = useState([]);
// // //   const [error, setError] = useState('');

// // //   const fetchServices = async () => {
// // //     try {
// // //       const response = await axios.get('http://localhost:5000/api/service/all');
// // //       console.log('Fetched services:', response.data); // Log the response to verify the data
// // //       setServices(response.data);
// // //     } catch (err) {
// // //       console.error('Error fetching services:', err);
// // //       setError('Failed to load services. Please try again later.');
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchServices();
// // //   }, []);

// // //   return (
// // //     <div style={{ padding: '20px' }}>
// // //       <h2>Available Services</h2>
// // //       {error && <p style={{ color: 'red' }}>{error}</p>}
// // //       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
// // //         {services.length > 0 ? (
// // //           services.map((service) => (
// // //             <div
// // //               key={service._id}
// // //               style={{
// // //                 border: '1px solid #ccc',
// // //                 borderRadius: '8px',
// // //                 padding: '16px',
// // //                 width: '250px',
// // //                 boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
// // //               }}
// // //             >
// // //               <h3>{service.title}</h3>
// // //               <p><strong>Category:</strong> {service.category}</p>
// // //               <p><strong>Description:</strong> {service.description}</p>
// // //               <p><strong>Price:</strong> ₹{service.price}</p>
              
// // //               {/* New details: State, City, Pincode, and Phone Number */}
// // //               {service.state && <p><strong>State:</strong> {service.state}</p>}
// // //               {service.city && <p><strong>City:</strong> {service.city}</p>}
// // //               {service.pincode && <p><strong>Pincode:</strong> {service.pincode}</p>}
// // //               {service.phoneNumber && <p><strong>Phone Number:</strong> {service.phoneNumber}</p>}

// // //               {service.provider && (
// // //                 <p><strong>Provider:</strong> {service.provider.name || 'N/A'}</p>
// // //               )}
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p>No services available.</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BrowseServices;
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const BrowseServices = () => {
// //   const [services, setServices] = useState([]);
// //   const [filteredServices, setFilteredServices] = useState([]);
// //   const [cart, setCart] = useState([]);
// //   const [search, setSearch] = useState('');
// //   const [error, setError] = useState('');

// //   const fetchServices = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:5000/api/service/all');
// //       setServices(response.data);
// //       setFilteredServices(response.data);
// //     } catch (err) {
// //       console.error('Error fetching services:', err);
// //       setError('Failed to load services. Please try again later.');
// //     }
// //   };

// //   const handleSearch = (e) => {
// //     const keyword = e.target.value.toLowerCase();
// //     setSearch(keyword);

// //     const filtered = services.filter(service =>
// //       service.title.toLowerCase().includes(keyword) ||
// //       service.category.toLowerCase().includes(keyword) ||
// //       (service.city && service.city.toLowerCase().includes(keyword))
// //     );
// //     setFilteredServices(filtered);
// //   };

// //   const addToCart = (service) => {
// //     if (!cart.find(item => item._id === service._id)) {
// //       setCart([...cart, service]);
// //       alert(`Added ${service.title} to cart`);
// //     } else {
// //       alert(`${service.title} is already in the cart`);
// //     }
// //   };

// //   const bookService = (service) => {
// //     // This can redirect or open a booking form in future
// //     alert(`Booking requested for: ${service.title}`);
// //   };

// //   useEffect(() => {
// //     fetchServices();
// //   }, []);

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h2>Available Services</h2>

// //       <input
// //         type="text"
// //         value={search}
// //         onChange={handleSearch}
// //         placeholder="Search by title, category or city"
// //         style={{ padding: '8px', width: '300px', marginBottom: '20px' }}
// //       />

// //       {error && <p style={{ color: 'red' }}>{error}</p>}

// //       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
// //         {filteredServices.length > 0 ? (
// //           filteredServices.map((service) => (
// //             <div
// //               key={service._id}
// //               style={{
// //                 border: '1px solid #ccc',
// //                 borderRadius: '8px',
// //                 padding: '16px',
// //                 width: '250px',
// //                 boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
// //               }}
// //             >
// //               <h3>{service.title}</h3>
// //               <p><strong>Category:</strong> {service.category}</p>
// //               <p><strong>Description:</strong> {service.description}</p>
// //               <p><strong>Price:</strong> ₹{service.price}</p>
// //               {service.city && <p><strong>City:</strong> {service.city}</p>}
// //               {service.pincode && <p><strong>Pincode:</strong> {service.pincode}</p>}
// //               {service.phoneNumber && <p><strong>Phone:</strong> {service.phoneNumber}</p>}
// //               {service.provider && (
// //                 <p><strong>Provider:</strong> {service.provider.name || 'N/A'}</p>
// //               )}

// //               <button
// //                 onClick={() => addToCart(service)}
// //                 style={{
// //                   marginTop: '10px',
// //                   padding: '8px',
// //                   backgroundColor: '#28a745',
// //                   color: '#fff',
// //                   border: 'none',
// //                   borderRadius: '4px',
// //                   cursor: 'pointer'
// //                 }}
// //               >
// //                 Add to Cart
// //               </button>

// //               <button
// //                 onClick={() => bookService(service)}
// //                 style={{
// //                   marginTop: '10px',
// //                   marginLeft: '10px',
// //                   padding: '8px',
// //                   backgroundColor: '#007bff',
// //                   color: '#fff',
// //                   border: 'none',
// //                   borderRadius: '4px',
// //                   cursor: 'pointer'
// //                 }}
// //               >
// //                 Book Now
// //               </button>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No services found.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default BrowseServices;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; // Import Link for routing

// const BrowseServices = () => {
//   const [services, setServices] = useState([]);
//   const [filteredServices, setFilteredServices] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [search, setSearch] = useState('');
//   const [error, setError] = useState('');

//   const fetchServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/service/all');
//       setServices(response.data);
//       setFilteredServices(response.data);
//     } catch (err) {
//       console.error('Error fetching services:', err);
//       setError('Failed to load services. Please try again later.');
//     }
//   };

//   const handleSearch = (e) => {
//     const keyword = e.target.value.toLowerCase();
//     setSearch(keyword);

//     const filtered = services.filter(service =>
//       service.title.toLowerCase().includes(keyword) ||
//       service.category.toLowerCase().includes(keyword) ||
//       (service.city && service.city.toLowerCase().includes(keyword))
//     );
//     setFilteredServices(filtered);
//   };

//   const addToCart = (service) => {
//     if (!cart.find(item => item._id === service._id)) {
//       setCart([...cart, service]);
//       localStorage.setItem('cart', JSON.stringify([...cart, service])); // Save cart to localStorage
//       alert(`Added ${service.title} to cart`);
//     } else {
//       alert(`${service.title} is already in the cart`);
//     }
//   };

//   // Book a single service
//   const handleBookNow = async (service) => {
//     const userId = localStorage.getItem("userId"); // Replace with actual user ID from context or auth

//     const bookingData = {
//       serviceId: service._id,
//       providerId: service.provider._id,
//       userId: userId,
//       status:"pending",
//     };

//     try {
//       // Replace with your backend URL
//       const response = await axios.post('http://localhost:5000/api/bookings/', bookingData);
//       console.log('Booked sucessfully', response.data);
//          alert("book service request is send")
//     } catch (error) {
//       console.error('Booking failed:', error);

//     }
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Available Services</h2>

//       <input
//         type="text"
//         value={search}
//         onChange={handleSearch}
//         placeholder="Search by title, category or city"
//         style={{ padding: '8px', width: '300px', marginBottom: '20px' }}
//       />

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//         {filteredServices.length > 0 ? (
//           filteredServices.map((service) => (
//             <div
//               key={service._id}
//               style={{
//                 border: '1px solid #ccc',
//                 borderRadius: '8px',
//                 padding: '16px',
//                 width: '250px',
//                 boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//               }}
//             >
//               <h3>{service.title}</h3>
//               <p><strong>Category:</strong> {service.category}</p>
//               <p><strong>Description:</strong> {service.description}</p>
//               <p><strong>Price:</strong> ₹{service.price}</p>
//               {service.city && <p><strong>City:</strong> {service.city}</p>}
//               {service.pincode && <p><strong>Pincode:</strong> {service.pincode}</p>}
//               {service.phoneNumber && <p><strong>Phone:</strong> {service.phoneNumber}</p>}
//               {service.provider && (
//                 <p><strong>Provider:</strong> {service.provider.name || 'N/A'}</p>
//               )}

//               <button
//                 onClick={() => addToCart(service)}
//                 style={{
//                   marginTop: '10px',
//                   padding: '8px',
//                   backgroundColor: '#28a745',
//                   color: '#fff',
//                   border: 'none',
//                   borderRadius: '4px',
//                   cursor: 'pointer'
//                 }}
//               >
//                 Add to Cart
//               </button>
              
//               <button
//                   onClick={() => handleBookNow(service)}
//                   style={{
//                     marginTop: '10px',
//                     marginLeft: '10px',
//                     padding: '8px',
//                     backgroundColor: '#007bff',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   Book Now
//                 </button>
              
//             </div>
//           ))
//         ) : (
//           <p>No services found.</p>
//         )}
//       </div>

//       <Link to="/cart">
//         <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', marginTop: '20px' }}>
//           Go to Cart
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default BrowseServices;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BrowseServices = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/service/all');
      const validServices = response.data.filter(service => service && service.provider && service.provider._id);
      setServices(validServices);
      setFilteredServices(validServices);
    } catch (err) {
      console.error('Error fetching services:', err);
      setError('Failed to load services. Please try again later.');
    }
  };

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);

    const filtered = services.filter(service =>
      service.title.toLowerCase().includes(keyword) ||
      service.category.toLowerCase().includes(keyword) ||
      (service.city && service.city.toLowerCase().includes(keyword))
    );
    setFilteredServices(filtered);
  };

  const addToCart = (service) => {
    if (!cart.find(item => item._id === service._id)) {
      const updatedCart = [...cart, service];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert(`Added ${service.title} to cart`);
    } else {
      alert(`${service.title} is already in the cart`);
    }
  };

  const handleBookNow = async (service) => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("You must be logged in to book a service.");
      return;
    }

    if (!service || !service.provider || !service.provider._id) {
      alert("Booking failed: Invalid service or provider.");
      return;
    }

    const bookingData = {
      serviceId: service._id,
      providerId: service.provider._id,
      userId: userId,
      status: "pending",
    };

    try {
      const response = await axios.post('http://localhost:5000/api/bookings/', bookingData);
      console.log('Booked successfully:', response.data);
      alert("Booking request sent successfully!");
    } catch (error) {
      console.error('Booking failed:', error);
      alert("Booking failed. Please try again later.");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Services</h2>

      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by title, category or city"
        style={{ padding: '8px', width: '300px', marginBottom: '20px' }}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div
              key={service._id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                width: '250px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3>{service.title}</h3>
              <p><strong>Category:</strong> {service.category}</p>
              <p><strong>Description:</strong> {service.description}</p>
              <p><strong>Price:</strong> ₹{service.price}</p>
              {service.city && <p><strong>City:</strong> {service.city}</p>}
              {service.pincode && <p><strong>Pincode:</strong> {service.pincode}</p>}
              {service.phoneNumber && <p><strong>Phone:</strong> {service.phoneNumber}</p>}
              {service.provider && (
                <p><strong>Provider:</strong> {service.provider.name || 'N/A'}</p>
              )}

              <button
                onClick={() => addToCart(service)}
                style={{
                  marginTop: '10px',
                  padding: '8px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Add to Cart
              </button>

              <button
                onClick={() => handleBookNow(service)}
                style={{
                  marginTop: '10px',
                  marginLeft: '10px',
                  padding: '8px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Book Now
              </button>
            </div>
          ))
        ) : (
          <p>No services found.</p>
        )}
      </div>

      <Link to="/cart">
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          marginTop: '20px'
        }}>
          Go to Cart
        </button>
      </Link>
    </div>
  );
};

export default BrowseServices;
