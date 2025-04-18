
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Public Pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

// Admin Dashboard & Pages
import AdminDashboard from './pages/AdminDashboard';
import AdminHome from './admin/AdminHome';
import AdminOverview from './admin/AdminOverview';
import ManageUsers from './admin/ManageUsers';
import ManageProviders from './admin/ManageProviders';
import ViewServices from './admin/ViewServices';
import CategoryList from './admin/CategoryList';

// Provider Dashboard & Pages
import ProviderDashboard from './pages/ProviderDashboard';
import ProviderViewServices from './provider/ProviderViewServices';
import AddService from './provider/AddService';
import ProviderProfile from './provider/ProviderProfile';
import BookingRequestProvider from './bookings/BookingRequestsProvider'; // Updated import for booking requests

// User Dashboard & Pages
import UserDashboard from './pages/UserDashboard';
import UserCart from './user/UserCart';
import UserOrders from './user/UserOrders';
import UserProfile from './user/UserProfile';
import BookServiceForm from './bookings/BookServiceForm'; // Updated import for booking service form
import BookingListUser from './bookings/BookingListUser'; // Updated import for booking list
import BookingRouterProvider from './provider/BookingRouterProvider';

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<AdminHome />} />
          <Route path="overview" element={<AdminOverview />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="providers" element={<ManageProviders />} />
          <Route path="services" element={<ViewServices />} />
          <Route path="categories" element={<CategoryList />} />
        </Route>

        {/* Provider Dashboard */}
        <Route path="/provider" element={<ProviderDashboard />}>
          <Route index element={<h2>Welcome to Provider Dashboard</h2>} />
          <Route path="add-service" element={<AddService />} />
          <Route path="view-services" element={<ProviderViewServices />} />
          <Route path='bookings' element={<BookingRouterProvider/>} />
          {/* <Route path="booking-req" element={<BookingRequestProvider />} /> */}
          <Route path="profile" element={<ProviderProfile />} />
        </Route>

        {/* User Dashboard */}
        <Route path="/user" element={<UserDashboard />}>
          <Route index element={<h2>Welcome to User Dashboard</h2>} />
          <Route path="cart" element={<UserCart />} />
          <Route path="orders" element={<UserOrders />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="book-service" element={<BookServiceForm />} />
          <Route path="booking-list" element={<BookingListUser />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
};

export default App;
