import React from 'react';

const ProviderNavbar = () => {
  return (
    <div style={navbarStyle}>
      <h2 style={{ margin: 0, fontSize: '18px' }}>Service Provider Dashboard</h2>
    </div>
  );
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 25px',
  background: '#1e1e2f',
  color: '#f5f5f5',
  height: '30px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

export default ProviderNavbar;
