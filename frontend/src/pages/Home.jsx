
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const containerStyle = {
    paddingTop: '80px',
    minHeight: '100vh',
    background: '#f9fafb',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  const sectionStyle = {
    padding: '60px 20px',
  };

  const headingStyle = {
    fontSize: '36px',
    color: '#333',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const serviceBox = {
    backgroundColor: '#eef5ff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    margin: '10px',
    flex: 1,
    minWidth: '200px',
  };

  return (
    <>
      <Navbar />

      <div style={containerStyle}>
        {/* Hero Section */}
        <section style={{ ...sectionStyle, background: '#e8f0ff' }}>
          <h1 style={headingStyle}>Find Trusted Urban Services Near You</h1>
          <p style={paragraphStyle}>
            Book electricians, plumbers, cleaners, and more — all verified and ready to help!
          </p>
          <a href="/signup">
            <button style={buttonStyle}>Get Started</button>
          </a>
        </section>

        {/* Popular Services */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Popular Services</h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
            {['Plumbing', 'Electrician', 'Cleaning', 'Appliance Repair'].map((service) => (
              <div key={service} style={serviceBox}>
                <h3 style={{ fontSize: '20px', color: '#007bff', marginBottom: '10px' }}>{service}</h3>
                <p style={{ color: '#666' }}>Expert and verified professionals.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{ ...sectionStyle, background: '#007bff', color: 'white' }}>
          <h2 style={headingStyle}>Why Choose Urban Services?</h2>
          <p style={{ ...paragraphStyle, color: '#f0f0f0' }}>
            We ensure quality service, verified pros, affordable pricing, and instant booking.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
