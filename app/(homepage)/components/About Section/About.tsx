import styles from "./about.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutText}>
        <p>
          Elora was born from a belief that fragrance should feel personal, not
          loud, not forced. Each scent is designed to complement presence, not
          overpower it.
        </p>
        <p>
          Inspired by nature, emotion, and modern elegance, Elora perfumes are
          crafted to leave a subtle impression, one that lingers long after
          you’ve gone.
        </p>
        <Link href="/about">Read more</Link>
      </div>
      <div className={styles.aboutImgContainer}>
        <div className={styles.aboutImg}></div>
      </div>
    </div>
  );
};

export default About;
