import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyServices = () => {
  const [services, setServices] = useState([]);

  // Fetch services for the logged-in provider
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/service/provider-services');
        setServices(response.data.services);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div style={styles.container}>
      <h2>My Services</h2>
      <div style={styles.serviceList}>
        {services.length > 0 ? (
          services.map((service) => (
            <div key={service._id} style={styles.serviceItem}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p>Price: ${service.price}</p>
              <Link to={`/provider/edit-service/${service._id}`} style={styles.link}>Edit</Link>
              <button style={styles.deleteButton}>Delete</button>
            </div>
          ))
        ) : (
          <p>No services available. Please add a service.</p>
        )}
      </div>
      <Link to="/provider/add-service" style={styles.addServiceButton}>Add New Service</Link>
    </div>
  );
};

const styles = {
  container: {
    width: '80%',
    margin: '20px auto',
    padding: '20px',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderRadius: '10px',
  },
  serviceList: {
    marginBottom: '20px',
  },
  serviceItem: {
    padding: '10px',
    marginBottom: '15px',
    background: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  link: {
    marginRight: '10px',
    color: '#4A90E2',
    textDecoration: 'none',
  },
  deleteButton: {
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  addServiceButton: {
    padding: '10px 20px',
    background: '#4A90E2',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
  },
};

export default MyServices;
