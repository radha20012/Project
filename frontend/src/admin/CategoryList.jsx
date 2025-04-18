
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch all categories
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/categories/all');
      setCategories(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || '❌ Error fetching categories');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Add a new category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/categories/add', {
        name,
        description,
      });
      toast.success('✅ Category added successfully!');
      setName('');
      setDescription('');
      fetchCategories(); // Refresh categories
    } catch (error) {
      toast.error(error.response?.data?.message || '❌ Error adding category');
    }
  };

  // Delete category
  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete('http://localhost:5000/api/categories/delete/${id}');
      toast.success('✅ Category deleted successfully!');
      fetchCategories(); // Refresh categories
    } catch (error) {
      toast.error(error.response?.data?.message || '❌ Error deleting category');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📂 Manage Categories</h2>

      <form onSubmit={handleAddCategory} style={styles.form}>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Category Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          ➕ Add Category
        </button>
      </form>

      <h3 style={styles.subheading}>🧾 All Categories:</h3>
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <ul style={styles.list}>
          {categories.map((cat) => (
            <li key={cat._id} style={styles.item}>
              <strong>{cat.name}</strong> — {cat.description}
              <div style={styles.actions}>
                <button onClick={() => handleDeleteCategory(cat._id)} style={styles.deleteButton}>
                  ❌ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '25px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    background: '#fafafa',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '30px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '6px',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  subheading: {
    borderBottom: '1px solid #ccc',
    paddingBottom: '5px',
    marginBottom: '15px',
  },
  list: {
    listStyle: 'none',
    paddingLeft: '0',
  },
  item: {
    padding: '10px',
    borderBottom: '1px solid #eee',
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actions: {
    display: 'flex',
    gap: '10px',
  },
  deleteButton: {
    padding: '6px 10px',
    fontSize: '14px',
    backgroundColor: '#DC3545',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default CategoryManager;