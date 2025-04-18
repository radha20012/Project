
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProviderSidebar = () => {
  const location = useLocation();

  const getLinkStyle = (path) => ({
    display: 'block',
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '6px',
    textDecoration: 'none',
    color: location.pathname === path ? '#fff' : '#333',
    backgroundColor: location.pathname === path ? '#007bff' : 'transparent',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
    transition: '0.2s ease-in-out',
  });

  return (
    <div style={sidebarStyle}>
      <h3 style={headerStyle}>Provider Panel</h3>
      
      <Link to="/provider" style={getLinkStyle('/provider')}>Dashboard</Link>
      <Link to="/provider/add-service" style={getLinkStyle('/provider/add-service')}>Add Service</Link>
      <Link to="/provider/view-services" style={getLinkStyle('/provider/view-services')}>View Services</Link>
      <Link to="/provider/bookings" style={getLinkStyle('/provider/bookings')}>Booking Requests</Link>
      
      <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #ccc' }} />

      <Link to="/utils/logout" style={{ ...getLinkStyle('/utils/logout'), color: '#e74c3c' }}>
        Logout
      </Link>
    </div>
  );
};

const sidebarStyle = {
  width: '220px',
  background: '#f0f2f5',
  padding: '20px',
  height: '100vh',
  boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: '60px', // Adjust if you have a fixed navbar
};

const headerStyle = {
  marginBottom: '20px',
  fontSize: '18px',
  color: '#333',
  borderBottom: '1px solid #ccc',
  paddingBottom: '10px',
};

export default ProviderSidebar;
