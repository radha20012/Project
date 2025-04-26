import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [form, setForm] = useState({ email: '', newPassword: '' });
  const [popup, setPopup] = useState({ show: false, type: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.newPassword) {
      showPopup('error', 'Please fill all fields.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/forgot-password', form);
      showPopup('success', res.data.message || 'Password reset successful!');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      console.error('Password reset failed:', err);
      showPopup('error', err.response?.data?.message || 'Something went wrong.');
    }
  };

  const showPopup = (type, message) => {
    setPopup({ show: true, type, message });
    setTimeout(() => setPopup({ show: false, type: '', message: '' }), 3000);
  };

  return (
    <div style={styles.page}>
      {popup.show && (
        <div
          style={{
            ...styles.popup,
            backgroundColor: popup.type === 'success' ? '#d1e7dd' : '#f8d7da',
            color: popup.type === 'success' ? '#0f5132' : '#842029',
            border: `1px solid ${popup.type === 'success' ? '#badbcc' : '#f5c2c7'}`,
          }}
        >
          {popup.message}
        </div>
      )}

      <div style={styles.card}>
        <h2 style={styles.heading}>Reset Your Password</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your registered email"
            required
            style={styles.input}
          />
          <input
            type="password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            placeholder="Enter new password"
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#eafafc',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    color: '#2c3e50',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#e9f0fb',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s',
  },
  popup: {
    position: 'absolute',
    top: '1rem',
    padding: '1rem 2rem',
    borderRadius: '10px',
    fontWeight: '500',
    zIndex: 999,
  },
};

export default ForgotPassword;
