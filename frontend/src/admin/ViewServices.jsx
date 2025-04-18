
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewServices = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    try {
      console.log("Fetching services from backend...");
      const response = await axios.get('http://localhost:5000/api/service/all');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error.response?.data || error.message || error);
      alert('Failed to fetch services. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/service/${id}`);
      alert('Service deleted successfully');
      fetchServices(); // refresh
    } catch (error) {
      console.error('Error deleting service:', error.response?.data || error.message || error);
      alert('Failed to delete service');
    }
  };

  const filteredServices = services.filter((service) =>
    service.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>All Services</h2>

      <input
        type="text"
        placeholder="Search by service title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={searchInputStyle}
      />

      {loading ? (
        <p>Loading services...</p>
      ) : filteredServices.length === 0 ? (
        <p>No services found.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr style={theadRowStyle}>
              <th style={thStyle}>Service Title</th>
              {/* <th style={thStyle}>Basic Detail</th> */}
              <th style={thStyle}>Provider</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>City</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service, index) => (
              <tr key={service._id} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
                <td style={tdStyle}>{service.title}</td>
                {/* <td style={tdStyle}>{service.description}</td> */}
                <td style={tdStyle}>{service.provider?.name || 'N/A'}</td>
                <td style={tdStyle}>{service.category || 'N/A'}</td>
                <td style={tdStyle}>{service.city}</td>
                <td style={tdStyle}>
                  <button style={deleteBtnStyle} onClick={() => handleDelete(service._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Styles (same as your original)
const containerStyle = {
  padding: '20px',
  backgroundColor: '#f8f9fa',
  minHeight: '100vh',
};

const headingStyle = {
  marginBottom: '20px',
  color: '#2d3748',
};

const searchInputStyle = {
  padding: '10px',
  width: '300px',
  marginBottom: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const theadRowStyle = {
  backgroundColor: '#4a5568',
  color: '#fff',
};

const thStyle = {
  padding: '12px',
  border: '1px solid #e2e8f0',
  textAlign: 'left',
};

const tdStyle = {
  padding: '10px',
  border: '1px solid #e2e8f0',
};

const evenRowStyle = {
  backgroundColor: '#edf2f7',
};

const oddRowStyle = {
  backgroundColor: '#fff',
};

const deleteBtnStyle = {
  padding: '6px 12px',
  backgroundColor: '#e53e3e',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default ViewServices;
