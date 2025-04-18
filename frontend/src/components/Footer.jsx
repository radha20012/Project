import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f1f1f1',
    padding: '20px 0',
    textAlign: 'center',
    color: '#777',
    marginTop: '40px',
    fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
      © {new Date().getFullYear()} Urban Services. All rights reserved.
    </footer>
  );
};

export default Footer;
