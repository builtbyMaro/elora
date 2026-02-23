import styles from "./displaycard.module.css";
import Link from "next/link";
import { fragrance } from "@/utils/fragrance";

type props = {
  fragrance: fragrance;
};

const DisplayCard = ({ fragrance }: props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <div
          className={styles.image}
          style={
            {
              "--img-name": `url(/perfumes/${fragrance.images.image1})`,
            } as React.CSSProperties
          }
        ></div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.perfumeText}>
          <h3>{fragrance.name}</h3>
          <div>
            <p>{fragrance.description}</p>
            <p className={styles.intensity}>{fragrance.details.intensity}</p>
          </div>
        </div>
        <Link href={`/fragrances/${fragrance.id}`}>
          <button className={styles.viewBtn}>View</button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayCard;
