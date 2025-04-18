
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Cart = () => {
  const [cart, setCart] = useState([]);


  // Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);
  console.log(cart)

  // Book a single service
  const handleBookNow = async (service) => {
    const userId = localStorage.getItem("userId"); // Replace with actual user ID from context or auth

    const bookingData = {
      serviceId: service._id,
      providerId: service.provider._id,
      userId: userId,
      status:"pending",
    };

    try {
      // Replace with your backend URL
      const response = await axios.post('http://localhost:5000/api/bookings/', bookingData);
      console.log('Booked sucessfully', response.data);
         alert("book service request is send")
    } catch (error) {
      console.error('Booking failed:', error);

    }
  };

  // Remove a service from the cart
  const removeFromCart = (serviceId) => {
    const updatedCart = cart.filter(service => service.serviceId !== serviceId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, service) => total + (service.price || 0), 0);
  };

  // Handle Checkout (for now just passing the data to backend)
  const handleCheckout = () => {
    // Assuming userId and providerId are available in your state or context
    const userId = 'currentUserId'; // Replace with actual userId
    const bookingData = cart.map(service => ({
      serviceId: service.serviceId,
      providerId: service.providerId,
      userId: userId,
      price: service.price,
    }));


    // Send the booking data to backend (e.g., using Axios)
    // axios.post('/api/bookings', { bookings: bookingData });

    console.log('Booking Data:', bookingData); // For now, logging the data

    // You can also clear the cart after sending it to the backend
    localStorage.removeItem('cart');
    setCart([]);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Cart</h2>

      {cart.length === 0 ? (
        <p style={styles.emptyText}>Your cart is empty. Start adding services!</p>
      ) : (
        <>
          <div style={styles.cardList}>
            {cart.map((service) => (
              <div key={service.serviceId} style={styles.card}>
                <h3 style={styles.title}>{service.title}</h3>
                <p><strong>Category:</strong> {service.category}</p>
                <p><strong>Description:</strong> {service.description}</p>
                <p><strong>Price:</strong> ₹{service.price}</p>
                {service.city && <p><strong>City:</strong> {service.city}</p>}
                {service.pincode && <p><strong>Pincode:</strong> {service.pincode}</p>}
                {service.phoneNumber && <p><strong>Phone:</strong> {service.phoneNumber}</p>}
                {service.provider && <p><strong>Provider:</strong> {service.provider.name || 'N/A'}</p>}

                <button
                  onClick={() => removeFromCart(service.serviceId)}
                  style={styles.removeButton}
                >
                  Remove
                </button>
                
                <button
                  onClick={() => handleBookNow(service)}
                  style={{
                    marginTop: '10px',
                    marginLeft: '10px',
                    padding: '8px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Book Now
                </button>




              </div>
            ))}
          </div>

          <div style={styles.summary}>
            <h3>Total Price: ₹{calculateTotal()}</h3>
            <button style={styles.checkoutButton} onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '960px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '26px',
    marginBottom: '20px',
    color: '#333',
  },
  emptyText: {
    fontSize: '18px',
    color: '#777',
  },
  cardList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  },
  title: {
    marginBottom: '10px',
    color: '#333',
  },
  removeButton: {
    padding: '8px 12px',
    backgroundColor: '#e53935',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    marginTop: '10px',
    cursor: 'pointer',
  },
  summary: {
    marginTop: '30px',
    textAlign: 'right',
  },
  checkoutButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Cart;
