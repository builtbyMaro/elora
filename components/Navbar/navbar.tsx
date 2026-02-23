"use client";
import "boxicons/css/boxicons.min.css";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div>
          <i
            className={`${styles.icon} bx bx-menu-alt-left`}
            onClick={() => setShowNav(true)}
          />
        </div>
        <div>
          <h1 className={styles.logo}>ELORA</h1>
        </div>
        <div>
          <i className={`${styles.icon} bx bx-shopping-bag`} />
        </div>
      </nav>
      <div className={`${styles.sideNav} ${showNav ? styles.showNav : ""}`}>
        <i
          className={`${styles.closeIcon} bx bx-x`}
          onClick={() => setShowNav(false)}
        ></i>
        <div className={styles.navLinks}>
          <Link
            href="/"
            className={styles.navLink}
            onClick={() => setShowNav(false)}
          >
            Home <i className="bx bx-chevron-right" />
          </Link>
          <Link
            href="/fragrances"
            className={styles.navLink}
            onClick={() => setShowNav(false)}
          >
            Fragrances <i className="bx bx-chevron-right" />
          </Link>
          <Link
            href="/about"
            className={styles.navLink}
            onClick={() => setShowNav(false)}
          >
            About Us <i className="bx bx-chevron-right" />
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link
            href="/shipping&returns"
            className={styles.navLink}
            onClick={() => setShowNav(false)}
          >
            Shipping & Returns <i className="bx bx-chevron-right" />
          </Link>
          <Link
            href="/privacy_policy"
            className={styles.navLink}
            onClick={() => setShowNav(false)}
          >
            Privacy policy <i className="bx bx-chevron-right" />
          </Link>
          <Link
            href="/terms&conditions"
            className={styles.navLink}
            onClick={() => setShowNav(false)}
          >
            Terms & Conditions <i className="bx bx-chevron-right" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
