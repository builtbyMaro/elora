import styles from "./perfumes.module.css";
import DisplayCard from "@/components/Perfume Display card/displaycard";
import Perfumes from "@/utils/perfumes";

const Perfume = () => {
  return (
    <section className={styles.perfumesContainer}>
      {Perfumes.map((perfume) => (
        <DisplayCard key={perfume.id} perfume={perfume} />
      ))}
    </section>
  );
};

export default Perfume;
