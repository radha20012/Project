
import React from 'react';
import { Outlet } from 'react-router-dom';
import ProviderSidebar from '../components/ProviderSidebar';
import ProviderNavbar from '../components/ProviderNavbar';

const ProviderDashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      {/* Top Navbar */}
      <div style={styles.navbarWrapper}>
        <ProviderNavbar />
      </div>

      {/* Sidebar + Main Content */}
      <div style={styles.bodyContainer}>
        <div style={styles.sidebarWrapper}>
          <ProviderSidebar />
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
    backgroundColor: '#f4f6f8',
    overflowY: 'auto',
  },
};

export default ProviderDashboard;
