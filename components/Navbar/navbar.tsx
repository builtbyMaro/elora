"use client";
import "boxicons/css/boxicons.min.css";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";
import { useCart } from "@/utils/context/cartContext";
import Link from "next/link";
import Cart from "./cart";
import SideNav from "./sideNav";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleShowNav = () => {
    setShowNav(true);
    setShowCart(false);
  };

  const handleShowCart = () => {
    setShowCart(true);
    setShowNav(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div>
          <i
            className={`${styles.icon} bx bx-menu-alt-left`}
            onClick={handleShowNav}
          />
        </div>
        <div>
          <Link href="/">
            <h1 className={styles.logo}>ELORA</h1>
          </Link>
        </div>
        <div>
          <div className={styles.iconWithNumber}>
            <i
              className={`${styles.icon} bx bx-shopping-bag`}
              onClick={handleShowCart}
            />
            {totalItems > 0 && (
              <span className={styles.totalItems}>{totalItems}</span>
            )}
          </div>
        </div>
      </nav>
      <SideNav showNav={showNav} setShowNav={setShowNav} />
      <Cart showCart={showCart} setShowCart={setShowCart} />
    </>
  );
};

export default Navbar;
