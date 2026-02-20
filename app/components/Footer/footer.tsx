import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <h2 className={styles.footerLogo}>ELORA</h2>
        <p
          className={styles.footerCopyright}
        >{`© ${new Date().getFullYear()} ELORA Fragrance House. All rights reserved.`}</p>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/perfumes">Perfumes</Link>
          <Link href="/about">About Us</Link>
        </div>
        <div className={styles.contactLinks}>
          <h4>Follow Us</h4>
          <Link href="">Instagram</Link>
          <Link href="">Facebook</Link>
          <Link href="">Twitter</Link>
        </div>
        <div className={styles.serviceLinks}>
          <h4>Customer Service / Info</h4>
          <Link href="">Contact: info@elora.com</Link>
          <Link href="">Shipping & Returns</Link>
          <Link href="">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
