import React from 'react';
import styles from './EmptyState.module.css';

const EmptyState = ({ message }) => {
  return (
    <div className={styles.empty}>
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;