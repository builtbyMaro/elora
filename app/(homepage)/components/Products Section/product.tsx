import styles from "./products.module.css";

const Product = () => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.image}></div>
      <div className={styles.detail}>
        <h3 className={styles.title}>Verdan</h3>
        <h4 className={styles.description}>
          Fresh and magnetic, for the modern man.
        </h4>
        <button className={styles.view}>View</button>
      </div>
    </div>
  );
};

export default Product;
