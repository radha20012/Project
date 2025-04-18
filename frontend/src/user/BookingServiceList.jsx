
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const MyBookings = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const providerId = localStorage.getItem("userId"); // assume userId is provider's ID

// //   useEffect(() => {
// //     fetchBookings();
// //   }, []);

// //   const fetchBookings = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:5000/api/bookings/provider/${providerId}`);
// //       setBookings(response.data);
// //     } catch (error) {
// //       console.error("Error fetching bookings:", error);
// //     }
// //   };

// //   const updateStatus = async (bookingId, action) => {
// //     try {
// //       await axios.patch(`http://localhost:5000/api/bookings/${bookingId}/${action}`);
// //       fetchBookings(); // refresh list
// //     } catch (error) {
// //       console.error("Failed to update status:", error);
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h2 style={styles.heading}>My Bookings</h2>
// //       {bookings.length === 0 ? (
// //         <p>No bookings found.</p>
// //       ) : (
// //         bookings.map((booking) => (
// //           <div key={booking._id} style={styles.card}>
// //             <p><strong>User:</strong> {booking.userId?.name || "N/A"}</p>
// //             <p><strong>Service:</strong> {booking.serviceId?.title || "N/A"}</p>
// //             <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
// //             <p><strong>Status:</strong> <span style={styles.status(booking.status)}>{booking.status}</span></p>

// //             {booking.status === "pending" && (
// //               <div style={styles.btnGroup}>
// //                 <button style={styles.approve} onClick={() => updateStatus(booking._id, 'approve')}>Approve</button>
// //                 <button style={styles.reject} onClick={() => updateStatus(booking._id, 'reject')}>Reject</button>
// //               </div>
// //             )}
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     maxWidth: "700px",
// //     margin: "0 auto",
// //     padding: "2rem",
// //     fontFamily: "Arial",
// //   },
// //   heading: {
// //     textAlign: "center",
// //     marginBottom: "1rem",
// //   },
// //   card: {
// //     backgroundColor: "#f4f4f4",
// //     padding: "1rem",
// //     borderRadius: "10px",
// //     marginBottom: "1rem",
// //     boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
// //   },
// //   btnGroup: {
// //     marginTop: "10px",
// //     display: "flex",
// //     gap: "10px",
// //   },
// //   approve: {
// //     backgroundColor: "#28a745",
// //     color: "white",
// //     border: "none",
// //     padding: "8px 16px",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //   },
// //   reject: {
// //     backgroundColor: "#dc3545",
// //     color: "white",
// //     border: "none",
// //     padding: "8px 16px",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //   },
// //   status: (status) => ({
// //     color:
// //       status === "approved"
// //         ? "green"
// //         : status === "rejected"
// //         ? "red"
// //         : "orange",
// //     fontWeight: "bold",
// //   }),
// // };

// // export default MyBookings;

// import React, { useState } from "react";
// import axios from "axios";

// const MyBookings = () => {
//   const [userId, setUserId] = useState("");
//   const [bookings, setBookings] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const fetchBookings = async () => {
//     if (!userId) {
//       setError("Please enter your User ID.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.get(`http://localhost:5000/api/bookings/user/${userId}`);
//       setBookings(res.data);
//       setError("");
//     } catch (err) {
//       setError("Error fetching bookings. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>Enter Your User ID to See Booking Status</h2>
//       <div style={{ margin: "1rem 0" }}>
//         <input
//           type="text"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//           style={{ padding: "0.5rem", width: "300px", marginRight: "10px" }}
//           placeholder="Enter User ID"
//         />
//         <button
//           onClick={fetchBookings}
//           style={{
//             padding: "0.5rem 1rem",
//             backgroundColor: "#007bff",
//             color: "#fff",
//             border: "none",
//             cursor: "pointer",
//             fontWeight: "bold",
//             borderRadius: "4px",
//           }}
//           disabled={loading}
//         >
//           {loading ? "Fetching..." : "Fetch Bookings"}
//         </button>
//       </div>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {bookings.length > 0 && (
//         <>
//           <h3>Your Booking Status</h3>
//           <table style={{
//             width: "100%",
//             borderCollapse: "collapse",
//             marginTop: "1rem",
//             fontFamily: "Arial, sans-serif",
//             boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
//           }}>
//             <thead>
//               <tr style={{ backgroundColor: "#f2f2f2" }}>
//                 <th style={tableHeaderStyle}>Service</th>
//                 <th style={tableHeaderStyle}>Status</th>
//                 <th style={tableHeaderStyle}>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking, index) => (
//                 <tr key={index}>
                  
//                   {/* <td style={tableCellStyle}>{booking.serviceId?.name || "Service name unavailable"}</td> */}
//                   <td style={tableCellStyle}>{booking.status}</td>
//                   <td style={tableCellStyle}>{new Date(booking.createdAt).toLocaleString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       )}
//     </div>
//   );
// };

// const tableHeaderStyle = {
//   border: "1px solid #ddd",
//   padding: "12px",
//   fontWeight: "bold",
//   textAlign: "left",
//   backgroundColor: "#e9ecef"
// };

// const tableCellStyle = {
//   border: "1px solid #ddd",
//   padding: "12px",
//   backgroundColor: "#fff"
// };

// export default MyBookings;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingServiceList = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      fetchBookings();
    } else {
      setError("User not logged in or ID missing.");
    }
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/bookings/user/${userId}`);
      setBookings(response.data);
    } catch (err) {
      console.error("Error fetching user bookings:", err);
      setError("Failed to load bookings. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Bookings</h2>

      {error && <p style={styles.error}>{error}</p>}

      {bookings.length === 0 && !error ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id} style={styles.card}>
            <p><strong>Service:</strong> {booking.serviceId?.title || "N/A"}</p>
            <p><strong>Provider:</strong> {booking.providerId?.name || "N/A"}</p>
            <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span style={styles.status(booking.status)}>{booking.status}</span>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1rem",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: "1rem",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: "1rem",
    borderRadius: "10px",
    marginBottom: "1rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  status: (status) => ({
    color:
      status === "approved"
        ? "green"
        : status === "rejected"
        ? "red"
        : "orange",
    fontWeight: "bold",
  }),
};

export default BookingServiceList;
