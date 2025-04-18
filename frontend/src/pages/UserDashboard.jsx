
import React, { useState } from 'react';
import UserNavbar from '../components/navbar/UserNavbar';
import UserSidebar from '../components/sidebar/UserSidebar';
import MyCart from '../user/MyCart';
import MyOrders from '../user/MyOrders';
import Profile from '../user/Profile';
import BrowseServices from "../user/BrowseServices";
import BookingServiceForm from '../user/BookingServiceForm';
import BookingServiceList from '../user/BookingServiceList';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard'); // Default tab

  const renderContent = () => {
    switch (activeTab) {
      case 'services':
        return <BrowseServices />;
      case 'cart':
        return <MyCart />;
      case 'orders':
        return <MyOrders />;
      case 'profile':
        return <Profile />;
      case 'bookingList':
        return <BookingServiceList />;
      case 'bookingForm':
        return <BookingServiceForm />;
      default:
        return (
          <>
            <h2>Welcome to User Home</h2>
            <p>This is the central dashboard page for the User panel.</p>
          </>
        );
    }
  };

  return (
    <div style={styles.dashboardContainer}>
      {/* Top Navbar */}
      <div style={styles.navbarWrapper}>
        <UserNavbar />
      </div>

      {/* Sidebar + Main Content */}
      <div style={styles.bodyContainer}>
        <div style={styles.sidebarWrapper}>
          <UserSidebar setActiveTab={setActiveTab} />
        </div>
        <div style={styles.mainContent}>
          {renderContent()}
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

export default UserDashboard;
