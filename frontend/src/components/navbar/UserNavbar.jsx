
import React from 'react';

const UserNavbar = () => {
  return (
    <nav style={navStyle}>
      <h2 style={titleStyle}>User Panel</h2>
    </nav>
  );
};

const navStyle = {
  backgroundColor: '#2d3748',
  padding: '10px 20px',
  color: '#fff',
  display: 'flex',
  justifyContent: 'left',
};

const titleStyle = {
  margin: 0,
};

export default UserNavbar;
