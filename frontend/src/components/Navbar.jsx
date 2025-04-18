
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#2563eb",
    textDecoration: "none",
  };

  const linkContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  };

  const linkStyle = {
    color: "#374151",
    textDecoration: "none",
    fontWeight: "500",
  };

  const linkHoverStyle = {
    color: "#2563eb",
  };

  return (
    <header style={navbarStyle}>
      <div>
        <Link to="/" style={logoStyle}>
        Urban Service
        </Link>
      </div>
      <nav style={linkContainerStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        {/* <Link to="/services" style={linkStyle}>Services</Link> */}
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/signup" style={linkStyle}>Signup</Link>
      </nav>
    </header>
  );
};

export default Navbar;
