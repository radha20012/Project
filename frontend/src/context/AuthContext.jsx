import { createContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage if available
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to handle login
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  // Function to get the logged-in user's ID
  const getUserId = () => {
    return user ? user._id : null;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, getUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
