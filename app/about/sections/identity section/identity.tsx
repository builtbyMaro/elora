import styles from "./identity.module.css";

const Identity = () => {
  return (
    <section className={styles.identityContainer}>
      <div className={styles.overlay}></div>
      <h3 className={styles.identityText}>
        <strong>ELORA</strong> approaches design with care for the natural
        systems it depends on. Decisions around packaging and presentation are
        guided by a desire to reduce harm, avoid excess, and respect the
        materials used. Simplicity is chosen over unnecessary complexity,
        allowing each element to exist for a reason.
      </h3>
      <h3 className={styles.identityText}>
        Attention is given to longevity and responsible sourcing, with
        consideration for how materials are produced, handled, and disposed of.
        Rather than treating design as decoration, <strong>ELORA</strong> treats
        it as a commitment. One that recognises the connection between creation,
        consumption, and the environment it touches.
      </h3>
    </section>
  );
};

export default Identity;
