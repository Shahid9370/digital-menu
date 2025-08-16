import React from 'react';
import styles from './MenuItemCard.module.css';

const MenuItemCard = ({ item }) => (
  <div className={styles.card}>
    {item.isNew && <span className={styles.newItem}>NEW</span>}
    <div className={styles.imageWrapper}>
      {item.image ? (
        <img src={item.image} alt={item.name} className={styles.image} />
      ) : (
        <div className={styles.imagePlaceholder}>
          <span role="img" aria-label="No image">🍽️</span>
        </div>
      )}
    </div>
    <h3 className={styles.cardTitle}>{item.name}</h3>
    <p className={styles.categoryPill}>{item.category}</p>
    <p className={styles.priceTag}>{item.price}</p>
    {item.description && (
      <p className={styles.description}>{item.description}</p>
    )}
  </div>
);

export default MenuItemCard;