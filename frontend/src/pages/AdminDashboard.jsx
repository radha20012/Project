
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../components/navbar/AdminNavbar';
import AdminSidebar from '../components/sidebar/AdminSidebar';

const AdminDashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      {/* Top Navbar */}
      <div style={styles.navbarWrapper}>
        <AdminNavbar />
      </div>

      {/* Sidebar + Main Content */}
      <div style={styles.bodyContainer}>
        <div style={styles.sidebarWrapper}>
          <AdminSidebar />
        </div>
        <div style={styles.mainContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  navbarWrapper: {
    flexShrink: 0,
  },
  bodyContainer: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#f4f6f8',
  },
  sidebarWrapper: {
    width: '250px',
    flexShrink: 0,
    backgroundColor: '#fff',
    borderRight: '1px solid #e0e0e0',
    overflowY: 'auto',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#fff',
    overflowY: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    margin: '20px',
  },
};

export default AdminDashboard;
