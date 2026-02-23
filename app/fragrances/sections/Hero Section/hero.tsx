import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <h1 className={styles.heroText}>Our Fragrances</h1>
    </section>
  );
};

export default Hero;
