
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [form, setForm] = useState({ email: '', password: '', remember: false });
//   const [popup, setPopup] = useState({ show: false, type: '', message: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', form);
//       const { token, user } = res.data;

//       // ✅ Save required info in localStorage
//       localStorage.setItem('token', token);
//       localStorage.setItem('role', user.role);
//       localStorage.setItem('userId', user._id); // ✅ Important for user-specific actions

//       showPopup('success', `Welcome ${user.name || 'User'}! Redirecting...`);

//       setTimeout(() => {
//         if (user.role === 'admin') navigate('/admin');
//         else if (user.role === 'provider') navigate('/provider');
//         else navigate('/user');
//       }, 2000);
//     } catch (err) {
//       console.error('Login failed:', err);
//       showPopup('error', 'Invalid email or password.');
//     }
//   };

//   const showPopup = (type, message) => {
//     setPopup({ show: true, type, message });
//     setTimeout(() => setPopup({ show: false, type: '', message: '' }), 3000);
//   };

//   return (
//     <div style={styles.page}>
//       {popup.show && (
//         <div
//           style={{
//             ...styles.popup,
//             backgroundColor: popup.type === 'success' ? '#d1e7dd' : '#f8d7da',
//             color: popup.type === 'success' ? '#0f5132' : '#842029',
//             border: `1px solid ${popup.type === 'success' ? '#badbcc' : '#f5c2c7'}`,
//           }}
//         >
//           {popup.message}
//         </div>
//       )}

//       <div style={styles.card}>
//         <h2 style={styles.heading}>Local Finder – Sign In to Your Account</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             required
//             style={styles.input}
//           />
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Enter your password"
//             required
//             style={styles.input}
//           />

//           <div style={styles.optionsRow}>
//             <label style={styles.rememberLabel}>
//               <input
//                 type="checkbox"
//                 name="remember"
//                 checked={form.remember}
//                 onChange={handleChange}
//                 style={styles.checkbox}
//               />
//               Remember Me
//             </label>
//             <Link to="/forgot-password" style={styles.link}>
//               Forgot password?
//             </Link>
//           </div>

//           <button type="submit" style={styles.button}>
//             Login
//           </button>
//         </form>

//         <p style={styles.bottomText}>
//           Don’t have an account?{' '}
//           <Link to="/signup" style={styles.link}>
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   page: {
//     backgroundColor: '#eafafc',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: '2.5rem',
//     borderRadius: '20px',
//     boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
//     maxWidth: '400px',
//     width: '100%',
//   },
//   heading: {
//     fontSize: '1.5rem',
//     marginBottom: '1.5rem',
//     textAlign: 'center',
//     color: '#2c3e50',
//   },
//   input: {
//     width: '100%',
//     padding: '0.75rem',
//     marginBottom: '1rem',
//     borderRadius: '10px',
//     border: '1px solid #ccc',
//     backgroundColor: '#e9f0fb',
//     fontSize: '1rem',
//   },
//   button: {
//     width: '100%',
//     padding: '0.75rem',
//     borderRadius: '10px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: '1rem',
//     border: 'none',
//     cursor: 'pointer',
//     transition: '0.3s',
//   },
//   optionsRow: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '1rem',
//     fontSize: '0.9rem',
//   },
//   rememberLabel: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//     color: '#333',
//   },
//   checkbox: {
//     width: '16px',
//     height: '16px',
//     cursor: 'pointer',
//   },
//   link: {
//     color: '#007bff',
//     textDecoration: 'none',
//     fontSize: '0.9rem',
//   },
//   bottomText: {
//     textAlign: 'center',
//     marginTop: '1.5rem',
//     fontSize: '0.95rem',
//   },
//   popup: {
//     position: 'absolute',
//     top: '1rem',
//     padding: '1rem 2rem',
//     borderRadius: '10px',
//     fontWeight: '500',
//     zIndex: 999,
//   },
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [popup, setPopup] = useState({ show: false, type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (!form.email || !form.password) {
      showPopup('error', 'Please enter both email and password.');
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      const { token, user } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', user.role);
      localStorage.setItem('userId', user._id);

      showPopup('success', `Welcome ${user.name || 'User'}! Redirecting...`);

      setTimeout(() => {
        if (user.role === 'admin') navigate('/admin');
        else if (user.role === 'provider') navigate('/provider');
        else navigate('/user');
      }, 2000);
    } catch (err) {
      const errMsg = err.response?.data?.message || 'Login failed. Please try again.';
      showPopup('error', errMsg);
    } finally {
      setLoading(false);
    }
  };

  const showPopup = (type, message) => {
    setPopup({ show: true, type, message });
    setTimeout(() => setPopup({ show: false, type: '', message: '' }), 3000);
  };

  return (
    <div style={styles.page}>
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
        <h2 style={styles.heading}>Urban Services – Sign In to Your Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            style={styles.input}
          />

          <div style={styles.optionsRow}>
            <label style={styles.rememberLabel}>
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                style={styles.checkbox}
              />
              Remember Me
            </label>
            <Link to="/forgot-password" style={styles.link}>
              Forgot password?
            </Link>
          </div>

          <button type="submit" style={{ ...styles.button, opacity: loading ? 0.7 : 1 }} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p style={styles.bottomText}>
          Don’t have an account?{' '}
          <Link to="/signup" style={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#eafafc',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#2c3e50',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#e9f0fb',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s',
  },
  optionsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    fontSize: '0.9rem',
  },
  rememberLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#333',
  },
  checkbox: {
    width: '16px',
    height: '16px',
    cursor: 'pointer',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  bottomText: {
    textAlign: 'center',
    marginTop: '1.5rem',
    fontSize: '0.95rem',
  },
  popup: {
    position: 'absolute',
    top: '1rem',
    padding: '1rem 2rem',
    borderRadius: '10px',
    fontWeight: '500',
    zIndex: 999,
  },
};

export default Login;
