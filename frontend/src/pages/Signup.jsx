
import React, { useState } from 'react';
import { signup } from '../api/auth';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ role: '', name: '', email: '', password: '' });
  const [popup, setPopup] = useState({ show: false, type: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.role || !form.name || !form.email || !form.password) {
      return showPopup('error', '⚠️ All fields are required.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return showPopup('error', '📧 Please enter a valid email address.');
    }

    try {
      await signup(form);
      showPopup('success', '🎉 Signup successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      showPopup('error', '❌ Signup failed. Try again.');
      console.error(err);
    }
  };

  const showPopup = (type, message) => {
    setPopup({ show: true, type, message });
    setTimeout(() => setPopup({ show: false, type: '', message: '' }), 3000);
  };

  return (
    <div style={styles.container}>
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
        <h1 style={styles.mainHeading}>Urban Services</h1>
        <h2 style={styles.heading}>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Select Role</label>
          <select name="role" value={form.role} onChange={handleChange} style={styles.select} required>
            <option value="" disabled>
              -- Select Role --
            </option>
            <option value="user">User</option>
            <option value="provider">Service Provider</option>
            {/* <option value="admin">Admin</option> */}
          </select>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            name="email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Signup
          </button>
        </form>

        <p style={styles.loginLink}>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#f4f6fa',
    padding: '1rem',
    position: 'relative',
  },
  card: {
    padding: '2rem',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  mainHeading: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#007bff',
  },
  heading: {
    marginBottom: '1.5rem',
    color: '#333',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#555',
    fontWeight: '500',
    textAlign: 'left',
  },
  select: {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginBottom: '1rem',
    fontSize: '1rem',
    color: '#333',
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    marginBottom: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    color: '#333',
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: '0.8rem',
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontSize: '1rem',
  },
  popup: {
    position: 'absolute',
    top: '1rem',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    fontWeight: '500',
    zIndex: 999,
    fontSize: '1rem',
    width: '90%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  loginLink: {
    marginTop: '1rem',
    color: '#555',
    fontSize: '0.95rem',
  },
};

export default Signup;
