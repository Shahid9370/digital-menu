import React, { useEffect } from "react";
import styles from "../../styles/AdminWarningToast.module.css";

const AdminWarningToast = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 4000); // auto-close after 4s
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;
  return (
    <div className={styles.toast}>
      <span className={styles.icon}>⚠️</span>
      <span>
        Sorry, this area is for admins only.<br/>
        Please return to the menu or contact staff for help.
      </span>
    </div>
  );
};

export default AdminWarningToast;