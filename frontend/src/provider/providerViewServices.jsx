// // // // // // // // src/provider/providerViewServices.jsx

// // // // // // // import React from 'react';

// // // // // // // const ProviderViewServices = () => {
// // // // // // //   const styles = {
// // // // // // //     container: { padding: '30px' },
// // // // // // //     title: { fontSize: '26px', fontWeight: 'bold', marginBottom: '10px' },
// // // // // // //     item: { marginTop: '8px', color: '#555' }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={styles.container}>
// // // // // // //       <h2 style={styles.title}>My Services</h2>
// // // // // // //       <ul>
// // // // // // //         <li style={styles.item}>AC Repair - ₹500</li>
// // // // // // //         <li style={styles.item}>Plumbing - ₹300</li>
// // // // // // //       </ul>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProviderViewServices;
// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import axios from 'axios';

// // // // // // const ViewServices = () => {
// // // // // //   const [services, setServices] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     // Update this URL with your actual backend endpoint
// // // // // //     axios.get('http://localhost:5000/api/services/provider') 
// // // // // //       .then((res) => setServices(res.data))
// // // // // //       .catch((err) => console.log(err));
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div style={{ padding: '20px' }}>
// // // // // //       <h2>My Services</h2>
// // // // // //       {services.length === 0 ? (
// // // // // //         <p>No services found.</p>
// // // // // //       ) : (
// // // // // //         <ul>
// // // // // //           {services.map((service) => (
// // // // // //             <li key={service._id}>
// // // // // //               <strong>{service.title}</strong>: {service.description}
// // // // // //             </li>
// // // // // //           ))}
// // // // // //         </ul>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ViewServices;
// // // // // import React, { useEffect, useState } from 'react';
// // // // // import axios from 'axios';

// // // // // const ViewServices = () => {
// // // // //   const [services, setServices] = useState([]);

// // // // //   useEffect(() => {
// // // // //     const providerId = '67f9f6913b58874afadc9688'; // 👈 Yahan apna actual providerId daalo

// // // // //     axios.get(`http://localhost:5000/api/service/by-provider/${providerId}`)
// // // // //       .then((res) => setServices(res.data))
// // // // //       .catch((err) => console.log(err));
// // // // //   }, []);

// // // // //   return (
// // // // //     <div style={{ padding: '20px' }}>
// // // // //       <h2>My Services</h2>
// // // // //       {services.length === 0 ? (
// // // // //         <p>No services found.</p>
// // // // //       ) : (
// // // // //         <ul>
// // // // //           {services.map((service) => (
// // // // //             <li key={service._id}>
// // // // //               <strong>{service.title}</strong>: {service.description}
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ViewServices;
// // // // import React, { useEffect, useState } from 'react';
// // // // import axios from 'axios';

// // // // const ViewServices = () => {
// // // //   const [services, setServices] = useState([]);
// // // //   const providerId = '67f9f6913b58874afadc9688'; // Replace this dynamically in future if needed

// // // //   useEffect(() => {
// // // //     axios
// // // //       .get(`http://localhost:5000/api/services/by-provider/:providerId`)
// // // //       .then((res) => setServices(res.data))
// // // //       .catch((err) => console.log(err));
// // // //   }, []);

// // // //   return (
// // // //     <div style={styles.page}>
// // // //       <div style={styles.container}>
// // // //         <h2 style={styles.heading}>📋 My Added Services</h2>
// // // //         {services.length === 0 ? (
// // // //           <p style={{ textAlign: 'center' }}>No services found.</p>
// // // //         ) : (
// // // //           services.map((service) => (
// // // //             <div key={service._id} style={styles.card}>
// // // //               <h3 style={styles.title}>{service.title}</h3>
// // // //               <p><strong>Description:</strong> {service.description}</p>
// // // //               <p><strong>Price:</strong> ₹{service.price}</p>
// // // //               <p><strong>Category:</strong> {service.category}</p>
// // // //               <p><strong>Provider ID:</strong> {service.provider}</p>
// // // //             </div>
// // // //           ))
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const styles = {
// // // //   page: {
// // // //     backgroundColor: '#f4f6f8',
// // // //     minHeight: '100vh',
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     paddingTop: '30px',
// // // //   },
// // // //   container: {
// // // //     width: '100%',
// // // //     maxWidth: '900px',
// // // //     padding: '10px 20px',
// // // //   },
// // // //   heading: {
// // // //     textAlign: 'center',
// // // //     marginBottom: '20px',
// // // //     color: '#333',
// // // //   },
// // // //   card: {
// // // //     backgroundColor: '#fff',
// // // //     borderRadius: '10px',
// // // //     padding: '20px',
// // // //     boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
// // // //     marginBottom: '20px',
// // // //   },
// // // //   title: {
// // // //     color: '#007BFF',
// // // //     marginBottom: '10px',
// // // //   },
// // // // };

// // // // export default ViewServices;
// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';

// // // const ViewServices = () => {
// // //   const [services, setServices] = useState([]);
// // //   const providerId = '67f9f6913b58874afadc9688'; // Replace with dynamic ID if needed

// // //   useEffect(() => {
// // //     axios
// // //       .get(`http://localhost:5000/api/service/by-provider/${providerId}`)
// // //       .then((res) => setServices(res.data))
// // //       .catch((err) => console.error('Error fetching services:', err));
// // //   }, []);

// // //   return (
// // //     <div style={styles.page}>
// // //       <div style={styles.container}>
// // //         <h2 style={styles.heading}>📋 My Added Services</h2>
// // //         {services.length === 0 ? (
// // //           <p style={{ textAlign: 'center' }}>No services found.</p>
// // //         ) : (
// // //           services.map((service) => (
// // //             <div key={service._id} style={styles.card}>
// // //               <h3 style={styles.title}>{service.title}</h3>
// // //               <p><strong>Description:</strong> {service.description}</p>
// // //               <p><strong>Price:</strong> ₹{service.price}</p>
// // //               <p><strong>Category:</strong> {service.category}</p>
// // //               <p><strong>Provider ID:</strong> {service.provider}</p>
// // //             </div>
// // //           ))
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   page: {
// // //     backgroundColor: '#f4f6f8',
// // //     minHeight: '100vh',
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     paddingTop: '30px',
// // //   },
// // //   container: {
// // //     width: '100%',
// // //     maxWidth: '900px',
// // //     padding: '10px 20px',
// // //   },
// // //   heading: {
// // //     textAlign: 'center',
// // //     marginBottom: '20px',
// // //     color: '#333',
// // //   },
// // //   card: {
// // //     backgroundColor: '#fff',
// // //     borderRadius: '10px',
// // //     padding: '20px',
// // //     boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
// // //     marginBottom: '20px',
// // //   },
// // //   title: {
// // //     color: '#007BFF',
// // //     marginBottom: '10px',
// // //   },
// // // };

// // // export default ViewServices;
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const ServiceList = () => {
// //   const [services, setServices] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const providerId = '67f3a5bbae316f502d905666'; // Your static provider ID

// //   useEffect(() => {
// //     axios.get(`http://localhost:5000/api/service/by-provider/${providerId}`)
// //       .then(response => {
// //         setServices(response.data);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching services:', error);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) return <p>Loading...</p>;

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h2>Services by Provider</h2>
// //       {services.length === 0 ? (
// //         <p>No services found.</p>
// //       ) : (
// //         services.map(service => (
// //           <div key={service._id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
// //             <h3>{service.title}</h3>
// //             <p>{service.description}</p>
// //             <p><strong>Price:</strong> ₹{service.price}</p>
// //             <p><strong>Category:</strong> {service.category}</p>
// //             <p><strong>City:</strong> {service.city}</p>
// //             <p><strong>Pincode:</strong> {service.pincode}</p>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default ServiceList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ServiceList = () => {
//   const [services, setServices] = useState([]);
//   const [filteredServices, setFilteredServices] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);

//   const providerId = '67f3a5bbae316f502d905666';

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/service/by-provider/${providerId}`)
//       .then(response => {
//         setServices(response.data);
//         setFilteredServices(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching services:', error);
//         setLoading(false);
//       });
//   }, []);

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);

//     const filtered = services.filter(service =>
//       service.title.toLowerCase().includes(term)
//     );
//     setFilteredServices(filtered);
//   };

//   if (loading) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</p>;

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Services by Provider</h2>

//       <input
//         type="text"
//         placeholder="Search by service title..."
//         value={searchTerm}
//         onChange={handleSearch}
//         style={styles.searchInput}
//       />

//       {filteredServices.length === 0 ? (
//         <p style={styles.noData}>No services found.</p>
//       ) : (
//         filteredServices.map(service => (
//           <div key={service._id} style={styles.card}>
//             <h3 style={styles.title}>{service.title}</h3>
//             <p style={styles.desc}>{service.description}</p>
//             <p><strong>Price:</strong> ₹{service.price}</p>
//             <p><strong>Category:</strong> {service.category}</p>
//             <p><strong>City:</strong> {service.city}</p>
//             <p><strong>Pincode:</strong> {service.pincode}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '800px',
//     margin: '40px auto',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif'
//   },
//   heading: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     color: '#333'
//   },
//   searchInput: {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '6px',
//     fontSize: '16px'
//   },
//   card: {
//     backgroundColor: '#f9f9f9',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '15px',
//     marginBottom: '15px',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
//   },
//   title: {
//     margin: '0 0 10px 0',
//     color: '#2c3e50'
//   },
//   desc: {
//     marginBottom: '10px',
//     color: '#555'
//   },
//   noData: {
//     textAlign: 'center',
//     color: 'gray',
//     marginTop: '30px'
//   }
// };

// export default ServiceList;
import React, { useState } from 'react';
import axios from 'axios';

const ServiceList = () => {
  const [providerId, setProviderId] = useState('');
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchServices = () => {
    if (!providerId.trim()) {
      setErrorMsg('Please enter a valid provider ID');
      return;
    }

    setLoading(true);
    setErrorMsg('');
    axios.get(`http://localhost:5000/api/service/by-provider/${providerId}`)
      .then(response => {
        setServices(response.data);
        setFilteredServices(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        setErrorMsg('No services found or invalid provider ID.');
        setLoading(false);
      });
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = services.filter(service =>
      service.title.toLowerCase().includes(term)
    );
    setFilteredServices(filtered);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Search Services by Provider ID</h2>

      <input
        type="text"
        placeholder="Enter Provider ID..."
        value={providerId}
        onChange={(e) => setProviderId(e.target.value)}
        style={styles.searchInput}
      />
      <button onClick={fetchServices} style={styles.button}>Search</button>

      {loading && <p style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</p>}
      {errorMsg && <p style={{ color: 'red', textAlign: 'center' }}>{errorMsg}</p>}

      {services.length > 0 && (
        <>
          <input
            type="text"
            placeholder="Search by service title..."
            value={searchTerm}
            onChange={handleSearch}
            style={styles.searchInput}
          />

          {filteredServices.length === 0 ? (
            <p style={styles.noData}>No services found.</p>
          ) : (
            filteredServices.map(service => (
              <div key={service._id} style={styles.card}>
                <h3 style={styles.title}>{service.title}</h3>
                <p style={styles.desc}>{service.description}</p>
                <p><strong>Price:</strong> ₹{service.price}</p>
                <p><strong>Category:</strong> {service.category}</p>
                <p><strong>City:</strong> {service.city}</p>
                <p><strong>Pincode:</strong> {service.pincode}</p>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333'
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px'
  },
  button: {
    width: '100%',
    padding: '10px',
    marginBottom: '25px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  card: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
  },
  title: {
    margin: '0 0 10px 0',
    color: '#2c3e50'
  },
  desc: {
    marginBottom: '10px',
    color: '#555'
  },
  noData: {
    textAlign: 'center',
    color: 'gray',
    marginTop: '30px'
  }
};

export default ServiceList;
