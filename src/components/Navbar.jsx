import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className={styles.navbar}>
      {/* mobile menu */}
      <div className={styles.hamburgerIcon}>
        {nav ? (
          <img
            src="src/assets/mobile/icon-cross.svg"
            alt="close icon"
            onClick={() => setNav(!nav)}
          />
        ) : (
          <img
            src="src/assets/mobile/icon-hamburger.svg"
            alt="hamburger icon"
            onClick={() => setNav(!nav)}
          />
        )}
      </div>
      <div className={nav ? styles.mobileNavOpen : styles.mobileNav}>
        <div className="">
          <nav className={styles.mobileNavContent}>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <button className={`${styles.btn} ${styles.btnOrange}`}>
                Schedule a Call
              </button>
            </ul>
          </nav>
        </div>
      </div>
      <img src="./src/assets/desktop/logo.svg" alt="logo" />
      <div className={styles.navRight}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <button className={`${styles.btn} ${styles.btnBlack}`}>
            Schedule a Call
          </button>
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
