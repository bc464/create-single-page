import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1>Branding & website design agency</h1>
        <p>
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <button className={`${styles.btn} ${styles.btnOrange}`}>
          Learn More
        </button>
      </div>
      <div className={styles.heroImageContent}>
        <picture>
          <source
            media="(min-width: 800px"
            srcSet="src/assets/desktop/image-hero.jpg"
          />
          <source
            media="(min-width: 749px"
            srcSet="src/assets/tablet/image-hero.jpg"
          />
          <img
            src="src/assets/mobile/image-hero.jpg"
            alt="hero-image"
            className={styles.heroImg}
          />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
