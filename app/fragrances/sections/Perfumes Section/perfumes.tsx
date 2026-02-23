import styles from "./perfumes.module.css";
import DisplayCard from "@/components/Perfume Display card/displaycard";
import { getFragrances } from "@/utils/perfumes";

const Perfume = () => {
  const fragrances = getFragrances();

  return (
    <section className={styles.perfumesContainer}>
      {fragrances.map((fragrance) => (
        <DisplayCard key={fragrance.id} fragrance={fragrance} />
      ))}
    </section>
  );
};

export default Perfume;
