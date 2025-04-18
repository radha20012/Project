// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const ProviderProfile = () => {
// //   const [profile, setProfile] = useState({
// //     name: '',
// //     email: '',
// //     contact: '',
// //   });

// //   const [message, setMessage] = useState('');
// //   const providerId = 'YOUR_PROVIDER_ID'; // Replace with dynamic ID or from AuthContext

// //   useEffect(() => {
// //     axios.get(`http://localhost:5000/api/provider/profile/${providerId}`)
// //       .then(res => {
// //         setProfile(res.data);
// //       })
// //       .catch(err => {
// //         console.error('Error fetching profile:', err);
// //       });
// //   }, [providerId]);

// //   const handleChange = (e) => {
// //     setProfile({ ...profile, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     axios.put(`http://localhost:5000/api/provider/profile/${providerId}`, profile)
// //       .then(res => {
// //         setMessage('Profile updated successfully!');
// //       })
// //       .catch(err => {
// //         console.error('Error updating profile:', err);
// //         setMessage('Update failed');
// //       });
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       <h2 style={headingStyle}>My Profile</h2>
// //       {message && <p style={msgStyle}>{message}</p>}
// //       <form onSubmit={handleSubmit} style={formStyle}>
// //         <label style={labelStyle}>Name:</label>
// //         <input
// //           type="text"
// //           name="name"
// //           value={profile.name}
// //           onChange={handleChange}
// //           style={inputStyle}
// //         />

// //         <label style={labelStyle}>Email:</label>
// //         <input
// //           type="email"
// //           name="email"
// //           value={profile.email}
// //           onChange={handleChange}
// //           style={inputStyle}
// //           readOnly
// //         />

// //         <label style={labelStyle}>Contact:</label>
// //         <input
// //           type="text"
// //           name="contact"
// //           value={profile.contact}
// //           onChange={handleChange}
// //           style={inputStyle}
// //         />

// //         <button type="submit" style={buttonStyle}>Update Profile</button>
// //       </form>
// //     </div>
// //   );
// // };

// // // Inline CSS
// // const containerStyle = {
// //   maxWidth: '500px',
// //   margin: '50px auto',
// //   padding: '30px',
// //   borderRadius: '10px',
// //   backgroundColor: '#f8fafc',
// //   boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // };

// // const headingStyle = {
// //   textAlign: 'center',
// //   color: '#2d3748',
// // };

// // const formStyle = {
// //   display: 'flex',
// //   flexDirection: 'column',
// // };

// // const labelStyle = {
// //   marginBottom: '5px',
// //   fontWeight: 'bold',
// //   color: '#4a5568',
// // };

// // const inputStyle = {
// //   padding: '10px',
// //   marginBottom: '20px',
// //   borderRadius: '5px',
// //   border: '1px solid #cbd5e0',
// // };

// // const buttonStyle = {
// //   padding: '10px',
// //   backgroundColor: '#3182ce',
// //   color: 'white',
// //   border: 'none',
// //   borderRadius: '5px',
// //   cursor: 'pointer',
// // };

// // const msgStyle = {
// //   color: 'green',
// //   textAlign: 'center',
// // };

// // export default ProviderProfile;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProviderProfile = () => {
//   const [profile, setProfile] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     profileImage: '',
//   });

//   const [imagePreview, setImagePreview] = useState('');
//   const [newImage, setNewImage] = useState(null);
//   const [message, setMessage] = useState('');

//   const providerId = 'YOUR_PROVIDER_ID'; // Replace this with real ID or from context/token

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/provider/profile/${providerId}`)
//       .then((res) => {
//         setProfile(res.data);
//         setImagePreview(res.data.profileImage);
//       })
//       .catch((err) => {
//         console.error('Error fetching profile:', err);
//       });
//   }, [providerId]);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setNewImage(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', profile.name);
//     formData.append('contact', profile.contact);
//     if (newImage) {
//       formData.append('profileImage', newImage);
//     }

//     try {
//       const res = await axios.put(
//         `http://localhost:5000/api/provider/profile/${providerId}`,
//         formData,
//         { headers: { 'Content-Type': 'multipart/form-data' } }
//       );
//       setMessage('Profile updated successfully!');
//     } catch (err) {
//       console.error('Update failed:', err);
//       setMessage('Error updating profile.');
//     }
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>Provider Profile</h2>

//       {message && <p style={messageStyle}>{message}</p>}

//       <form onSubmit={handleSubmit} style={formStyle} encType="multipart/form-data">
//         <div style={imgContainer}>
//           <img
//             src={imagePreview || '/default-avatar.png'}
//             alt="Profile"
//             style={imgStyle}
//           />
//           <input type="file" name="profileImage" onChange={handleImageChange} />
//         </div>

//         <label style={labelStyle}>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={profile.name}
//           onChange={handleChange}
//           style={inputStyle}
//         />

//         <label style={labelStyle}>Email</label>
//         <input
//           type="email"
//           value={profile.email}
//           disabled
//           style={{ ...inputStyle, background: '#e2e8f0', cursor: 'not-allowed' }}
//         />

//         <label style={labelStyle}>Contact</label>
//         <input
//           type="text"
//           name="contact"
//           value={profile.contact}
//           onChange={handleChange}
//           style={inputStyle}
//         />

//         <button type="submit" style={buttonStyle}>Update Profile</button>
//       </form>
//     </div>
//   );
// };

// // === Inline CSS ===
// const containerStyle = {
//   maxWidth: '500px',
//   margin: '50px auto',
//   padding: '30px',
//   borderRadius: '12px',
//   background: '#fff',
//   boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//   fontFamily: 'Arial, sans-serif',
// };

// const headingStyle = {
//   textAlign: 'center',
//   marginBottom: '20px',
//   color: '#2d3748',
// };

// const formStyle = {
//   display: 'flex',
//   flexDirection: 'column',
// };

// const labelStyle = {
//   margin: '10px 0 5px',
//   fontWeight: 'bold',
// };

// const inputStyle = {
//   padding: '10px',
//   borderRadius: '6px',
//   border: '1px solid #ccc',
// };

// const buttonStyle = {
//   marginTop: '20px',
//   padding: '12px',
//   backgroundColor: '#3182ce',
//   color: 'white',
//   border: 'none',
//   borderRadius: '6px',
//   fontSize: '16px',
//   cursor: 'pointer',
// };

// const imgStyle = {
//   width: '120px',
//   height: '120px',
//   objectFit: 'cover',
//   borderRadius: '50%',
//   marginBottom: '10px',
// };

// const imgContainer = {
//   textAlign: 'center',
//   marginBottom: '20px',
// };

// const messageStyle = {
//   textAlign: 'center',
//   color: 'green',
//   marginBottom: '10px',
// };

// export default ProviderProfile;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProviderProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    contact: '',
    profileImage: '',
  });

  const [imagePreview, setImagePreview] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [message, setMessage] = useState('');

  // 👇 Auto-fetch provider ID from localStorage (update this if using AuthContext)
  const providerId = localStorage.getItem('providerId');

  useEffect(() => {
    if (providerId) {
      axios.get(`http://localhost:5000/api/providers/${providerId}`)
        .then((res) => {
          setProfile(res.data);
          setImagePreview(res.data.profileImage || '/default-avatar.png');
        })
        .catch((err) => {
          console.error('Error fetching profile:', err);
        });
    }
  }, [providerId]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('contact', profile.contact);
    if (newImage) {
      formData.append('profileImage', newImage);
    }

    try {
      await axios.put(
        `http://localhost:5000/api/providers/${providerId}`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      setMessage('✅ Profile updated successfully!');
    } catch (err) {
      console.error('Update failed:', err);
      setMessage('❌ Error updating profile.');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Provider Profile</h2>

      {message && <p style={messageStyle}>{message}</p>}

      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={imgContainer}>
          <img
            src={imagePreview}
            alt="Profile"
            style={imgStyle}
          />
          <input type="file" name="profileImage" onChange={handleImageChange} />
        </div>

        <label style={labelStyle}>Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Email</label>
        <input
          type="email"
          value={profile.email}
          disabled
          style={{ ...inputStyle, background: '#e2e8f0', cursor: 'not-allowed' }}
        />

        <label style={labelStyle}>Contact</label>
        <input
          type="text"
          name="contact"
          value={profile.contact}
          onChange={handleChange}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>Update Profile</button>
      </form>
    </div>
  );
};

// === Inline CSS Styles ===
const containerStyle = {
  maxWidth: '500px',
  margin: '50px auto',
  padding: '30px',
  borderRadius: '12px',
  background: '#fff',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#2d3748',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  margin: '10px 0 5px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '12px',
  backgroundColor: '#3182ce',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  cursor: 'pointer',
};

const imgStyle = {
  width: '120px',
  height: '120px',
  objectFit: 'cover',
  borderRadius: '50%',
  marginBottom: '10px',
};

const imgContainer = {
  textAlign: 'center',
  marginBottom: '20px',
};

const messageStyle = {
  textAlign: 'center',
  color: 'green',
  marginBottom: '10px',
};

export default ProviderProfile;
