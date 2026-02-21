import styles from "./cta.module.css";

const CTA = () => {
  return (
    <div className={styles.ctaContainer}>
      <h2 className={styles.heading}>Stay Close to Elora</h2>
      <h3 className={styles.subHeading}>
        Be the first to experience new releases, limited editions, and the
        stories behind each creation
      </h3>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input
            type="email"
            placeholder="example@elora.com"
            className={styles.emailInput}
          />
          <button type="submit" className={styles.submitButton}>
            Subscribe
            <i className={`bx bx-send ${styles.sendIcon}`} />
          </button>
        </form>
        <p className={styles.disclaimer}>
          We respect your space — only meaningful updates.
        </p>
      </div>
    </div>
  );
};

export default CTA;
