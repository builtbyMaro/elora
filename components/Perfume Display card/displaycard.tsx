import styles from "./displaycard.module.css";
import Link from "next/link";

type perfume = {
  id: number;
  name: string;
  HomepageDescription: string;
  description: string;
  story: string;
  images: {
    image1: string;
    image2: string;
    image3: string;
  };
  details: {
    size: string;
    intensity: string;
    price: string;
  };
};

type perfumeProp = {
  perfume: perfume;
};

const DisplayCard = ({ perfume }: perfumeProp) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <div
          className={styles.image}
          style={
            {
              "--img-name": `url(/perfumes/${perfume.images.image1})`,
            } as React.CSSProperties
          }
        ></div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.perfumeText}>
          <h3>{perfume.name}</h3>
          <div>
            <p>{perfume.description}</p>
            <p className={styles.intensity}>{perfume.details.intensity}</p>
          </div>
        </div>
        <Link href="">
          <button className={styles.viewBtn}>View</button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayCard;
