
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#34495e',
    fontWeight: '500',
    padding: '8px 0',
    transition: 'all 0.2s ease-in-out'
  };

  const hoverStyle = {
    color: '#2c3e50',
    fontWeight: 'bold'
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, hoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, linkStyle);
  };

  return (
    <div style={{
      width: '220px',
      backgroundColor: '#ecf0f1',
      padding: '20px',
      borderRight: '1px solid #ccc',
      height: 'calc(100vh - 60px)'
    }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Link to="/admin/overview" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Dashboard</Link>
        <Link to="/admin/users" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Manage Users</Link>
        <Link to="/admin/providers" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Manage Providers</Link>
        {/* <Link to="/admin/services" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>All Services</Link> */}
       <Link to="/admin/services"style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>All Services</Link>
        <Link to="/admin/categories" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Categories</Link>
        <Link to="/utils/logout" style={{ ...linkStyle, color: '#e74c3c', fontWeight: 'bold' }}>Logout</Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
