import React, { useState, useEffect } from 'react';
import Header from '../../components/Header.jsx';
import { getCategories } from '../../api/categories.js';
import styles from '../../styles/Categories.module.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h2>Manage Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <p>Add, edit, or delete categories here (coming soon).</p>
    </div>
  );
};

export default Categories;