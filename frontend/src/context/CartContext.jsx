
import React, { createContext, useState, useContext } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Provide the cart state and actions to components
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (service) => {
    setCart((prevCart) => [...prevCart, service]);
  };

  // Function to remove items from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  // Return the context provider
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
