
import React from 'react';

const UserSidebar = ({ setActiveTab }) => {
  return (
    <aside style={sidebarStyle}>
      <ul style={ulStyle}>
        <li><button onClick={() => setActiveTab('dashboard')} style={btnStyle}>Dashboard</button></li>
        <li><button onClick={() => setActiveTab('services')} style={btnStyle}>Browse Services</button></li>
        <li><button onClick={() => setActiveTab('cart')} style={btnStyle}>Book Service</button></li>
        {/* <li><button onClick={() => setActiveTab('bookingForm')} style={btnStyle}></button></li> */}
        <li><button onClick={() => setActiveTab('bookingList')} style={btnStyle}>My Bookings</button></li>

        <li><button onClick={() => {
          localStorage.clear();
          window.location.href = '/login';
        }} style={logoutStyle}>Logout</button></li>
      </ul>
    </aside>
  );
};

const sidebarStyle = {
  width: '220px',
  background: '#edf2f7',
  height: '100vh',
  padding: '20px',
  borderRight: '1px solid #cbd5e0',
};

const ulStyle = {
  listStyleType: 'none',
  padding: 0,
};

const btnStyle = {
  background: 'none',
  border: 'none',
  color: '#2d3748',
  fontWeight: 'bold',
  cursor: 'pointer',
  padding: '10px 0',
  textAlign: 'left',
  fontSize: '16px',
};

const logoutStyle = {
  ...btnStyle,
  color: 'red',
};

export default UserSidebar;
