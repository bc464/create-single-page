import React from "react";
import styles from "./Design.module.css";

const Design = () => {
  return (
    <div className={styles.designWrapper}>
      <div className={styles.designPattern}>
        <img
          src="../src/assets/desktop/bg-pattern-wave-red.svg"
          alt="bg-pattern-wave-red"
          className={styles.patternWaveRed}
        />
      </div>
      <div className={styles.designContainer}>
        <div className={styles.designImageContent}>
          <picture>
            <source
              media="(min-width: 1025px"
              srcSet="src/assets/desktop/image-strategic.jpg"
            />
            <source
              media="(min-width: 749px"
              srcSet="src/assets/tablet/image-strategic.jpg"
            />
            <img
              src="src/assets/mobile/image-strategic.jpg"
              alt="hero-image"
              className={styles.designImg}
            />
          </picture>
        </div>
        <div className={styles.designTextContent}>
          <h2>
            <span className={styles.designHeading}>Design</span> is strategic.
          </h2>
          <p>
            A well-crafted design strategy consistently produces desired
            outcomes and brand awareness. We are firm believers that success
            lies in creative collaboration with our clients.
          </p>
          <a href="#">Schedule a Call</a>
        </div>
      </div>
    </div>
  );
};

export default Design;
