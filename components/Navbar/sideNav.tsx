"use client";
import styles from "./navbar.module.css";
import { useState } from "react";
import Link from "next/link";

type Props = {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideNav = ({ showNav, setShowNav }: Props) => {
  return (
    <div
      className={`${styles.overlay} ${showNav ? styles.showOverlay : ""}`}
      onClick={() => setShowNav(false)}
    >
      <div
        className={`${styles.sideNav} ${showNav ? styles.showNav : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <i
          className={`${styles.closeNav} bx bx-x`}
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
    </div>
  );
};

export default SideNav;
