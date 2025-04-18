
import React from 'react';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
  return (
    <div style={{ width: '200px', background: '#f1f1f1', padding: '20px', height: '100vh' }}>
      <h3>User Menu</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/user/dashboard">Dashboard</Link></li>
        <li><Link to="/user/services">Browse Services</Link></li>
        <li><Link to="/user/cart">My Cart</Link></li>
        <li><Link to="/user/orders">My Orders</Link></li>
        <li><Link to="/user/profile">Profile </Link></li>
        {/* Add the Book Service link */}
        <li><Link to="/user/book-service">Book Service</Link></li>
      </ul>
    </div>
  );
};

export default UserSidebar;
