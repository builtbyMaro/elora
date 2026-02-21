import styles from "./Hero.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.darkOverlay}></div>
      <div className={styles.textContainer}>
        <h1>A single scent can tell a story</h1>
        <p>
          Discover our premium collection of fragrances, crafted to inspire
          calm, allure, and timeless elegance.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.heroImg}
          src="/Images/heroImg1.png"
          alt="Elora perfume display"
        />
      </div>
    </div>
  );
};

export default HeroSection;
