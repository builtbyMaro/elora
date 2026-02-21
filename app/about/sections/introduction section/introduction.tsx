import styles from "./introduction.module.css";

const Introduction = () => {
  return (
    <section className={styles.introductionContainer}>
      <h3 className={styles.introductionText}>
        <strong>ELORA</strong> is a fragrance house built on one simple idea,
        scent shapes how you are perceived and how you move through the world. A
        well made perfume doesn’t just smell good, it creates presence, mood,
        and memory in the people around you.
      </h3>
      <h3 className={styles.introductionText}>
        Every <strong>ELORA</strong> fragrance is created with intention.
        Nothing is added for decoration or removed for speed. The goal is
        consistency and control. A scent that opens clearly, settles smoothly,
        and stays with you in a way that feels natural rather than forced.
      </h3>
    </section>
  );
};

export default Introduction;
