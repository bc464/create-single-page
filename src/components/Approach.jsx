import React from "react";
import styles from "./Approach.module.css";

const Approach = () => {
  return (
    <div className={styles.approachContainer}>
      <div className={styles.approachLeft}>
        <div className={styles.approachLeftHeading}>
          <h2>Our approach for creating a winning brand</h2>
        </div>
      </div>
      <div className={styles.approachRight}>
        <div className={styles.approachRightBox}>
          <h1>01</h1>
          <div className={styles.approachRightContent}>
            <h4>Brand strategy</h4>
            <p>
              Brand strategy is critical for long-term success. Outshining
              competitors and capturing the target audience are key.
            </p>
          </div>
        </div>

        <div className={styles.approachRightBox}>
          <h1>02</h1>
          <div className={styles.approachRightContent}>
            <h4>Brand design</h4>
            <p>
              Keeping the brand design unique and meaningful helps in
              communicating the brand’s timeless value effectively.
            </p>
          </div>
        </div>

        <div className={styles.approachRightBox}>
          <h1>03</h1>
          <div className={styles.approachRightContent}>
            <h4>Web design</h4>
            <p>
              A beautifully crafted website is the best tool for brand
              awareness, and ultimately results in increased revenues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
