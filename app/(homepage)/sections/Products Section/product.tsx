import styles from "./products.module.css";
import Link from "next/link";
import { fragrance } from "@/utils/types/fragrance";

type props = {
  fragrance: fragrance;
};

const Product = ({ fragrance }: props) => {
  return (
    <div className={styles.productContainer}>
      <div
        className={styles.image}
        style={
          {
            "--img-name": `url(/Perfumes/${fragrance.images.image1})`,
          } as React.CSSProperties
        }
      ></div>
      <div className={styles.detail}>
        <h3 className={styles.title}>{fragrance.name}</h3>
        <h4 className={styles.description}>{fragrance.HomepageDescription}</h4>
        <Link href={`/fragrances/${fragrance.id}`}>
          <button className={styles.view}>View</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
