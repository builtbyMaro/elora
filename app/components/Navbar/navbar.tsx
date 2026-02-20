"use client";
import "boxicons/css/boxicons.min.css";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div>
        <i className={`${styles.icon} bx bx-menu-alt-left`} />
      </div>
      <div>
        <h1 className={styles.logo}>ELORA</h1>
      </div>
      <div>
        <i className={`${styles.icon} bx bx-shopping-bag`} />
      </div>
    </nav>
  );
};

export default Navbar;
