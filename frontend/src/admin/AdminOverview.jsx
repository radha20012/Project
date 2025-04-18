
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminOverview = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProviders: 0,
    totalServices: 0,
    recentServices: [],
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const userRes = await axios.get('http://localhost:5000/api/user');
        const providerRes = await axios.get('http://localhost:5000/api/provider');
        const serviceRes = await axios.get('http://localhost:5000/api/services');

        setStats({
          totalUsers: userRes.data.length,
          totalProviders: providerRes.data.length,
          totalServices: serviceRes.data.length,
          recentServices: serviceRes.data.slice(-5).reverse(),
        });
      } catch (err) {
        console.error('Error fetching stats:', err.response?.data || err.message);
      }
    };

    fetchStats();
  }, []);

  const cardStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    flex: 1,
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={headingStyle}>Admin Overview</h2>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={cardStyle}>
          <h3>Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>
        <div style={cardStyle}>
          <h3>Total Providers</h3>
          <p>{stats.totalProviders}</p>
        </div>
        <div style={cardStyle}>
          <h3>Total Services</h3>
          <p>{stats.totalServices}</p>
        </div>
      </div>

      <div style={cardStyle}>
        <h3>Recently Added Services</h3>
        {stats.recentServices.length === 0 ? (
          <p>No recent services found.</p>
        ) : (
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
            {stats.recentServices.map((service, index) => (
              <li key={index}>{service.name || 'Unnamed Service'}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminOverview;
