import styles from "./products.module.css";
import Product from "./product";
import Perfumes from "@/utils/perfumes";
import Link from "next/link";

const Products = () => {
  const homePerfumes = Perfumes.slice(1, 4);

  return (
    <div className={styles.productsContainer}>
      <div className={styles.productCard}>
        <div className={styles.productImage}></div>
        <div className={styles.productDetails}>
          <h3>Latest Fragrance</h3>
          <h2>Aurea</h2>
          <p>
            A luminous, luxurious fragrance that radiates warmth and
            sophistication, perfect for moments of refined indulgence.
          </p>
          <button className={styles.viewBtn}>View</button>
        </div>
      </div>
      <div className={styles.productList}>
        {homePerfumes.map((perfume) => (
          <Product key={perfume.id} perfume={perfume} />
        ))}
      </div>
      <Link href="/fragrances">
        <button className={styles.seeOther}> See other Fragrances</button>
      </Link>
    </div>
  );
};

export default Products;
