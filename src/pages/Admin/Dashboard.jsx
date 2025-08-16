import React from 'react';
import Header from '../../components/Header.jsx';
import styles from '../../styles/Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h2>Admin Dashboard</h2>
      <p>Manage your menu: add, edit, or delete categories and items.</p>
      <div className={styles.actions}>
        <a href="/admin/categories">Manage Categories</a>
        <a href="/admin/items">Manage Items</a>
      </div>
    </div>
  );
};

export default Dashboard;