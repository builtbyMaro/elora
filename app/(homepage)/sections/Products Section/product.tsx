import styles from "./products.module.css";
type Perfume = {
  id: number;
  name: string;
  HomepageDescription: string;
  images: {
    image1: string;
  };
};

type perfumeProp = {
  perfume: Perfume;
};

const Product = ({ perfume }: perfumeProp) => {
  return (
    <div className={styles.productContainer}>
      <div
        className={styles.image}
        style={
          {
            "--img-name": `url(/perfumes/${perfume.images.image1})`,
          } as React.CSSProperties
        }
      ></div>
      <div className={styles.detail}>
        <h3 className={styles.title}>{perfume.name}</h3>
        <h4 className={styles.description}>{perfume.HomepageDescription}</h4>
        <button className={styles.view}>View</button>
      </div>
    </div>
  );
};

export default Product;
