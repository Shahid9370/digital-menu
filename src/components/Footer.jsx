import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.left}>
      <svg className={styles.copyrightIcon} viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="7" stroke="#fff" strokeWidth="1" fill="none"/>
        <text x="5" y="12" fontSize="9" fill="#fff" fontFamily="Arial">©</text>
      </svg>
      <span className={styles.copyrightText}>2025 Digital Menu. All rights reserved.</span>
    </div>
    <div className={styles.right}>
      <a href="https://www.instagram.com/knowledge_corner_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg className={styles.socialIcon} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" fill="none" stroke="#fff" strokeWidth="2"/>
          <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="#fff" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="#fff"/>
        </svg>
      </a>
      <a href="https://wa.me/9370034794" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg className={styles.socialIcon} viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="#fff" strokeWidth="2"/>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.669.149-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.199-.242-.579-.487-.5-.669-.51-.173-.009-.372-.011-.571-.011s-.521.074-.794.372c-.272.298-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.075c.149.198 2.099 3.209 5.079 4.062.709.193 1.26.308 1.69.396.709.144 1.356.124 1.868.075.571-.055 1.758-.719 2.008-1.414.248-.695.248-1.29.173-1.414-.075-.124-.272-.198-.57-.347z" fill="#fff"/>
        </svg>
      </a>
      <a href="mailto:shahidsrs93@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
        <svg className={styles.socialIcon} viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="3" fill="none" stroke="#fff" strokeWidth="2"/>
          <polyline points="3,6 12,13 21,6" fill="none" stroke="#fff" strokeWidth="2"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/shahid-shaikh-68993a214/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg className={styles.socialIcon} viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="#fff" strokeWidth="2"/>
          <circle cx="7.5" cy="8.5" r="2" fill="#fff"/>
          <rect x="6" y="12" width="3" height="6" fill="#fff"/>
          <rect x="11" y="12" width="3" height="6" fill="#fff"/>
          <path d="M13.5,12V10.5c0-1,1.5-1,1.5,0V12" stroke="#fff" strokeWidth="1"/>
        </svg>
      </a>
    </div>
  </footer>
);

export default Footer;