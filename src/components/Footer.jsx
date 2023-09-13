import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <h2>Let's build something great together.</h2>
      <button className={`${styles.btn} ${styles.btnOrange}`}>
        Schedule a Call
      </button>
    </div>
  );
};

export default Footer;
