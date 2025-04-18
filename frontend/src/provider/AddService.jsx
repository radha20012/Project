
import React, { useState } from 'react';
import axios from 'axios';

const AddService = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    provider: '',
    state: '', // Added state
    city: '', // Added city
    pincode: '', // Added pincode
    phoneNumber: '', // Added phone number
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/service/add', formData);
      setMessage(response.data.message);
      setFormData({ title: '', description: '', price: '', category: '', provider: '', state: '', city: '', pincode: '', phoneNumber: '' });
    } catch (error) {
      console.error('Error adding service:', error);
      setMessage(error.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>➕ Add New Service</h2>
        {message && <p style={styles.message}>{message}</p>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" name="title" placeholder="Service Title" value={formData.title} onChange={handleChange} required style={styles.input} />
          <textarea name="description" placeholder="Service Description" value={formData.description} onChange={handleChange} required rows="4" style={styles.textarea} />
          <input type="number" name="price" placeholder="Service Price (₹)" value={formData.price} onChange={handleChange} required style={styles.input} />
          <input type="text" name="category" placeholder="Service Category" value={formData.category} onChange={handleChange} required style={styles.input} />
          <input type="text" name="provider" placeholder="Provider ID" value={formData.provider} onChange={handleChange} required style={styles.input} />
          
          {/* New fields for State, City, Pincode, and Phone Number */}
          <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required style={styles.input} />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required style={styles.input} />
          <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} required style={styles.input} />
          <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required style={styles.input} />

          <button type="submit" style={styles.button}>Add Service</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20px',
  },
  container: {
    width: '100%',
    maxWidth: '480px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  message: {
    color: 'green',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px 15px',
    fontSize: '14px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  textarea: {
    padding: '10px 15px',
    fontSize: '14px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    resize: 'vertical',
  },
  button: {
    padding: '12px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '15px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};

export default AddService;
