import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search menu..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className={styles.search}
    />
  );
};

export default SearchBar;