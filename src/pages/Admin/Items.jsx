import React, { useState, useEffect } from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import { getItems } from '../../api/items.js';
import styles from '../../styles/Items.module.css';

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedItems = await getItems();
        console.log('Fetched items in Items.jsx:', fetchedItems);
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h2>Manage Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - {item.category} - ${item.price}</li>
        ))}
      </ul>
      <p>Add, edit, or delete items here (coming soon).</p>
      <Footer />
    </div>
  );
};

export default Items;