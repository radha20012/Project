import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

const ManageProviders = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingProvider, setEditingProvider] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", role: "" });

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/manage/providers");
      setProviders(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching providers:", err);
      setLoading(false);
    }
  };

  const handleDelete = async (providerId) => {
    if (!window.confirm("Are you sure you want to delete this provider?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/manage/providers/${providerId}`);
      setProviders((prev) => prev.filter((provider) => provider._id !== providerId));
    } catch (err) {
      console.error("Error deleting provider:", err);
    }
  };

  const openEditModal = (provider) => {
    setEditingProvider(provider);
    setEditForm({ name: provider.name || "", role: provider.role });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/manage/providers/${editingProvider._id}`,
        editForm
      );
      fetchProviders(); // Refresh list
      setEditingProvider(null);
    } catch (err) {
      console.error("Error updating provider:", err);
    }
  };

  const filteredProviders = providers.filter(
    (provider) =>
      provider.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🔧 Manage Service Providers</h2>

      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />

      {loading ? (
        <p>Loading providers...</p>
      ) : filteredProviders.length === 0 ? (
        <p>No providers found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeadRow}>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Role</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProviders.map((provider) => (
              <tr key={provider._id} style={styles.tr}>
                <td style={styles.td}>{provider.name || "N/A"}</td>
                <td style={styles.td}>{provider.email}</td>
                <td style={styles.td}>{provider.role}</td>
                <td style={styles.td}>
                  <button
                    onClick={() => openEditModal(provider)}
                    style={styles.editButton}
                  >
                    <FaEdit /> Edit
                  </button>
                  &nbsp; | &nbsp;
                  <button
                    onClick={() => handleDelete(provider._id)}
                    style={styles.deleteButton}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Edit Modal */}
      {editingProvider && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3>Edit Provider</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={editForm.name}
              onChange={handleEditChange}
              style={styles.input}
            />
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={editForm.role}
              onChange={handleEditChange}
              style={styles.input}
            />
            <div style={styles.modalActions}>
              <button onClick={handleEditSubmit} style={styles.saveButton}>
                Save
              </button>
              <button
                onClick={() => setEditingProvider(null)}
                style={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "20px",
  },
  searchInput: {
    width: "100%",
    padding: "10px 14px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  tableHeadRow: {
    backgroundColor: "#007bff",
    color: "#fff",
  },
  th: {
    padding: "12px 16px",
    textAlign: "left",
  },
  tr: {
    borderBottom: "1px solid #ddd",
    transition: "background 0.2s ease-in-out",
  },
  td: {
    padding: "12px 16px",
  },
  editButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#007bff",
    fontWeight: "bold",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  },
  deleteButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#dc3545",
    fontWeight: "bold",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  },
  modalOverlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  modalActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
  saveButton: {
    padding: "8px 14px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  cancelButton: {
    padding: "8px 14px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ManageProviders;
