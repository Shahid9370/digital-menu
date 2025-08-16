import React from 'react';
import styles from './CategoryChip.module.css';

const CategoryChip = ({ category, isSelected, onSelect }) => {
  return (
    <button
      className={`${styles.chip} ${isSelected ? styles.selected : ''}`}
      onClick={onSelect}
    >
      {category}
    </button>
  );
};

export default CategoryChip;