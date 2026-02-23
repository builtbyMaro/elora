import styles from "./products.module.css";
import Product from "./product";
import { getFragrances } from "@/utils/perfumes";
import Link from "next/link";

const Products = () => {
  const fragrances = getFragrances();
  const latestFragrance = fragrances.at(0);
  const homeFragrances = fragrances.slice(1, 4);

  console.log(latestFragrance);

  return (
    <div className={styles.productsContainer}>
      <div className={styles.productCard}>
        <div
          className={styles.productImage}
          style={
            {
              "--img-name": `url(/perfumes/${latestFragrance?.images.image4})`,
            } as React.CSSProperties
          }
        ></div>
        <div className={styles.productDetails}>
          <h3>Latest Fragrance</h3>
          <h2>{latestFragrance?.name}</h2>
          <p>{latestFragrance?.description}</p>
          <Link href={`/fragrances/${latestFragrance?.id}`}>
            <button className={styles.viewBtn}>View</button>
          </Link>
        </div>
      </div>
      <div className={styles.productList}>
        {homeFragrances.map((fragrance) => (
          <Product key={fragrance.id} fragrance={fragrance} />
        ))}
      </div>
      <Link href="/fragrances">
        <button className={styles.seeOther}> See other Fragrances</button>
      </Link>
    </div>
  );
};

export default Products;
