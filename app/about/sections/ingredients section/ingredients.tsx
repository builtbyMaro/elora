import styles from "./ingredients.module.css";

const Ingredients = () => {
  return (
    <section className={styles.ingredientsContainer}>
      <div className={styles.ingredientsText}>
        <h3>
          Each fragrance begins with carefully selected raw materials chosen for
          clarity, depth, and stability. Ingredients are tested not just for how
          they smell in isolation, but for how they interact over time once
          worn.
        </h3>
        <h3>
          This approach ensures that the fragrance remains consistent from the
          first spray to hours later. <strong>ELORA</strong> fragrances are
          designed to evolve smoothly, avoiding sharp edges or sudden breakdowns
          that interrupt the experience.
        </h3>
      </div>
      <div className={styles.ingredientsImgContainer}>
        <img
          className={styles.ingredientsImg}
          src="/Images/ingredients-section-image.jpg"
          alt="Image of Perfume Ingredients"
        />
      </div>
    </section>
  );
};

export default Ingredients;
