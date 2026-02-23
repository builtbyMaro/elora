import styles from "./craft.module.css";

const Craft = () => {
  return (
    <section className={styles.craftContainer}>
      <div className={styles.craftText}>
        <h3>
          Fragrance is shaped through balance. Each note is chosen to support
          the others, not compete with them, and the progression from first
          impression to dry-down is treated as a single, continuous experience.
          <strong>ELORA</strong> fragrances are developed slowly, with careful
          adjustments until they behave consistently and predictably on skin.
        </h3>
        <h3>
          This approach gives fragrance a sense of control and presence. It does
          not rush to announce itself or fade without notice. Instead, it
          settles, holds its ground, and remains aware of its surroundings.
          Through this restraint, <strong>ELORA</strong> treats fragrance as
          something measured and intentional. Present, composed, and quietly
          assured.
        </h3>
      </div>
      <div className={styles.craftImgContainer}>
        <img
          className={styles.craftImg}
          src="/Images/craft-section-image.jpg"
          alt="image of elora being crafted"
        />
      </div>
    </section>
  );
};

export default Craft;
