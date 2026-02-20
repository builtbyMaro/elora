import styles from "./products.module.css";
import Product from "./product";

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productCard}>
        <div className={styles.productImage}></div>
        <div className={styles.productDetails}>
          <h3>Latest Scent</h3>
          <h2>Aurea</h2>
          <p>
            A luminous, luxurious fragrance that radiates warmth and
            sophistication, perfect for moments of refined indulgence.
          </p>
          <button className={styles.viewBtn}>View</button>
        </div>
      </div>
      <div className={styles.productList}>
        <Product />
        <Product />
        <Product />
      </div>
      <button className={styles.seeOther}> See other Scents</button>
    </div>
  );
};

export default Products;
