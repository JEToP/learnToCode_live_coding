import React, { memo, useEffect } from "react";

import logo from "../../assets/logo.svg";
import styles from "./navbar.module.css";

const Navbar = memo(() => {
  useEffect(() => {
    const navigationItems = document.querySelectorAll(`.${styles.nav_link}`);
    navigationItems.forEach((i) =>
      i.addEventListener("click", (event) => {
        console.log("scrolll");
        event.preventDefault();
        document
          .getElementById(i.getAttribute("href").substring(1))
          .scrollIntoView({ behavior: "smooth", block: "center" });
      })
    );
    return () => {
      // rimuovere i listeners
    };
  }, []);

  return (
    <div style={{ background: "transparent", padding: "0 72px" }}>
      <div className={styles.wrapper}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <a href="#experience" className={styles.nav_link}>
            Experience
          </a>
          <a href="#work" className={styles.nav_link}>
            Work
          </a>
          <a
            href="#contact"
            className={`${styles.nav_link} ${styles.nav_contact}`}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
});

export default Navbar;
