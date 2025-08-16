import React from 'react';
import Header from '../components/Header.jsx';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Contact Shahid Shaikh</h1>
        <p className={styles.heroSubtitle}>
          MERN Stack Developer <span className={styles.heroDivider}>|</span> Ready to Build Your Next Project
        </p>
      </section>

      {/* Contact Info */}
      <section className={styles.contactInfo}>
        <div className={styles.contactCard}>
          <h2>Get in Touch</h2>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <span className={styles.iconLocation} />
              <span>Pune, Maharashtra, India</span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.iconPhone} />
              <a href="tel:+919370034794">+91 9370034794</a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.iconMail} />
              <a href="mailto:shahidsrs93@gmail.com">shahidsrs93@gmail.com</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Message Form */}
      <section className={styles.formSection}>
        <h2>Send a Message</h2>
        <div className={styles.formCard}>
          <form>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className={styles.formInput} placeholder="Your Name" autoComplete="off"/>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className={styles.formInput} placeholder="Your Email" autoComplete="off"/>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" className={styles.formInput} rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="button" className={styles.submitButton}>Send Message 🚀</button>
          </form>
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className={styles.ctaSection}>
        <a href="https://portfolio-shahid-shaikh.netlify.app/" className={styles.ctaButton}>View My Portfolio</a>
      </section>
    </div>
  );
};

export default ContactPage;