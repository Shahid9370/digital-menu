import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItems } from '../api/items.js';
import styles from '../styles/HomePage.module.css';
import Header from '../components/Header.jsx';
import MenuItemCard from '../components/MenuItemCard.jsx';

const HomePage = () => {
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const items = await getItems();
        setFeaturedItems(items.slice(0, 3));
      } catch (error) {
        console.error('Error fetching featured items:', error);
      }
    };
    fetchFeaturedItems();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroBanner}>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
            alt="Restaurant Banner"
            className={styles.bannerImg}
          />
          <div className={styles.heroBannerOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Welcome to Our Restaurant
            </h1>
            <p className={styles.heroText}>
              Discover our safe, hygienic digital menu.<br/>
              <span className={styles.heroSlogan}>
                Scan the QR code, browse your favorites, and let our staff know your choice!
              </span>
            </p>
            <Link to="/menu" className={`btn btn-primary btn-lg ${styles.ctaButton}`}>
              View Menu
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.qrSection}>
        <div className={styles.qrCard}>
          <h2 className={styles.sectionTitle}>Contactless Digital Menu</h2>
          <p>
            <strong>Step 1:</strong> Scan the QR code at your table.<br/>
            <strong>Step 2:</strong> Browse our menu and pick your favorite dishes.<br/>
            <strong>Step 3:</strong> Please call your waiter and tell them your selection.
          </p>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=https://digital-qr-menu.netlify.app"
            alt="Scan QR for Menu"
            className={styles.qrImg}
          />
        </div>
      </section>
      <section className={styles.featured}>
        <h2 className={styles.sectionTitle}>Featured Dishes</h2>
        <div className={styles.featuredItems}>
          {featuredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} className={styles.featuredCard} />
          ))}
        </div>
      </section>
      <section className={styles.testimonialsSection}>
        <h2>What Our Customers Say</h2>
        <div className={styles.testimonialsList}>
          <div className={styles.testimonial}>
            <p>"I loved browsing the menu on my phone. No paper cards, just scan and choose!"</p>
            <span>— Priya</span>
          </div>
          <div className={styles.testimonial}>
            <p>"Much more hygienic and easy for everyone."</p>
            <span>— Aarav</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;