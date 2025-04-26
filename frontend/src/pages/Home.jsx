
// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const Home = () => {
//   const containerStyle = {
//     paddingTop: '80px',
//     minHeight: '100vh',
//     background: '#f9fafb',
//     fontFamily: 'Arial, sans-serif',
//     textAlign: 'center',
//   };

//   const sectionStyle = {
//     padding: '60px 20px',
//   };

//   const headingStyle = {
//     fontSize: '36px',
//     color: '#333',
//     fontWeight: 'bold',
//   };

//   const paragraphStyle = {
//     fontSize: '18px',
//     color: '#555',
//     marginBottom: '20px',
//   };

//   const buttonStyle = {
//     padding: '12px 24px',
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontSize: '16px',
//   };

//   const serviceBox = {
//     backgroundColor: '#eef5ff',
//     padding: '20px',
//     borderRadius: '12px',
//     boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
//     margin: '10px',
//     flex: 1,
//     minWidth: '200px',
//   };

//   return (
//     <>
//       <Navbar />

//       <div style={containerStyle}>
//         {/* Hero Section */}
//         <section style={{ ...sectionStyle, background: '#e8f0ff' }}>
//           <h1 style={headingStyle}>Find Trusted Urban Services Near You</h1>
//           <p style={paragraphStyle}>
//             Book electricians, plumbers, cleaners, and more — all verified and ready to help!
//           </p>
//           <a href="/signup">
//             <button style={buttonStyle}>Get Started</button>
//           </a>
//         </section>

//         {/* Popular Services */}
//         <section style={sectionStyle}>
//           <h2 style={headingStyle}>Popular Services</h2>
//           <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
//             {['Plumbing', 'Electrician', 'Cleaning', 'Appliance Repair'].map((service) => (
//               <div key={service} style={serviceBox}>
//                 <h3 style={{ fontSize: '20px', color: '#007bff', marginBottom: '10px' }}>{service}</h3>
//                 <p style={{ color: '#666' }}>Expert and verified professionals.</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Why Choose Us */}
//         <section style={{ ...sectionStyle, background: '#007bff', color: 'white' }}>
//           <h2 style={headingStyle}>Why Choose Urban Services?</h2>
//           <p style={{ ...paragraphStyle, color: '#f0f0f0' }}>
//             We ensure quality service, verified pros, affordable pricing, and instant booking.
//           </p>
//         </section>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Home;
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const containerStyle = {
    paddingTop: '80px',
    minHeight: '100vh',
    background: '#f2f4f7',
    fontFamily: "'Poppins', sans-serif",
    textAlign: 'center',
  };

  const sectionStyle = {
    padding: '80px 20px',
  };

  const headingStyle = {
    fontSize: '40px',
    color: '#1f2937',
    fontWeight: '700',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#4b5563',
    marginBottom: '30px',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const buttonStyle = {
    padding: '14px 28px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  };

  const serviceBox = {
    backgroundColor: 'white',
    padding: '30px 20px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    margin: '15px',
    flex: '1',
    minWidth: '220px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const serviceBoxHover = {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
  };

  return (
    <>
      <Navbar />

      <div style={containerStyle}>
        {/* Hero Section */}
        <section style={{ ...sectionStyle, background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', color: 'white' }}>
          <h1 style={{ ...headingStyle, color: 'white' }}>Find Trusted Urban Services Near You</h1>
          <p style={{ ...paragraphStyle, color: '#e5e7eb' }}>
            Book electricians, plumbers, cleaners, and more — all verified and ready to help!
          </p>
          <a href="/signup">
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#2563eb')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#3b82f6')}
            >
              Get Started
            </button>
          </a>
        </section>

        {/* Popular Services */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Popular Services</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '40px',
              gap: '20px',
            }}
          >
            {['Plumbing', 'Electrician', 'Cleaning', 'Appliance Repair'].map((service) => (
              <div
                key={service}
                style={serviceBox}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
              >
                <h3 style={{ fontSize: '22px', color: '#3b82f6', marginBottom: '12px' }}>{service}</h3>
                <p style={{ color: '#6b7280', fontSize: '16px' }}>Expert and verified professionals.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{ ...sectionStyle, background: '#1f2937', color: 'white' }}>
          <h2 style={{ ...headingStyle, color: 'white' }}>Why Choose Urban Services?</h2>
          <p style={{ ...paragraphStyle, color: '#d1d5db' }}>
            We ensure quality service, verified pros, affordable pricing, and instant booking.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
