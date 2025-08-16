import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import SearchBar from '../components/SearchBar.jsx';
import CategoryChip from '../components/CategoryChip.jsx';
import MenuItemCard from '../components/MenuItemCard.jsx';
import EmptyState from '../components/EmptyState.jsx';
import { getItems } from '../api/items.js';
import { getCategories } from '../api/categories.js';
import styles from '../styles/MenuPage.module.css';

// Only Veg & Non-Veg options, with values matching the 'vegetarian' field
const foodTypes = [
  { label: "Veg", icon: "🌱", value: true },
  { label: "Non-Veg", icon: "🍗", value: false }
];

const MenuPage = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await getCategories();
        const fetchedItems = await getItems();
        setCategories(fetchedCategories);
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleTypeSelect = (typeLabel) => {
    setSelectedType(typeLabel === selectedType ? null : typeLabel);
  };

  const filteredItems = items.filter(
    (item) =>
      (!selectedCategory || item.category === selectedCategory) &&
      (
        selectedType === null ||
        item.vegetarian === foodTypes.find(t => t.label === selectedType).value
      ) &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Food Type Chips */}
      <div className={styles.types}>
        {foodTypes.map((typeObj) => (
          <CategoryChip
            key={typeObj.label}
            category={typeObj.label}
            isSelected={typeObj.label === selectedType}
            onSelect={() => handleTypeSelect(typeObj.label)}
            icon={typeObj.icon}
          />
        ))}
      </div>

      {/* Category Chips */}
      <div className={styles.categories}>
        {categories.map((category) => (
          <CategoryChip
            key={category}
            category={category}
            isSelected={category === selectedCategory}
            onSelect={() => handleCategorySelect(category)}
          />
        ))}
      </div>
      <div className={styles.itemsGrid}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))
        ) : (
          <EmptyState message="No items found." />
        )}
      </div>
    </div>
  );
};
export default MenuPage;