import React from "react";
import styles from "./Brand.module.css";

const Brand = () => {
  return (
    <div className={styles.brandContainer}>
      <div>
        <h2>Brand naming & guidelines</h2>
        <div className={styles.brandNextArrows}></div>
        <img
          src="../src/assets/desktop/icon-arrow-previous.svg"
          alt="arrow previous icon"
          className={styles.brandArrow}
        />
        <img
          src="../src/assets/desktop/icon-arrow-next.svg"
          alt="arrow next icon"
          className={styles.brandArrow}
        />
      </div>
      <div className={styles.brandImageBox}>
        <picture>
          <source
            media="(min-width: 800px"
            srcSet="../src/assets/desktop/image-slide-1.jpg"
          />
          <source
            media="(min-width: 749px"
            srcSet="../src/assets/tablet/image-slide-1.jpg"
          />
          <img
            src="../src/assets/mobile/image-slide-1.jpg"
            alt="slider image one"
            className={styles.brandImage}
          />
        </picture>

        <div className={styles.brandImageContent}>
          <h4>Lean Product Roadmap</h4>
          <p>2019 Project</p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
