import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { getFragrances, getFraganceId } from "@/utils/perfumes";
import ImageCarousel from "@/components/Carousel Display/carousel";
import CartAction from "@/components/Cart Action/cartAction";
import Product from "@/app/(homepage)/sections/Products Section/product";

export const generateStaticParams = async () => {
  const fragrances = getFragrances();

  return fragrances.map((fragrance) => ({
    fragranceid: fragrance.id.toString(),
  }));
};

type Props = {
  params: Promise<{
    fragranceid: string;
  }>;
};

const fragrances = getFragrances();

const ViewFragrance = async ({ params }: Props) => {
  const { fragranceid } = await params;
  const id = Number(fragranceid);

  const fragrance = getFraganceId(id);
  const recommended = fragrances
    .filter((f) => f.id !== Number(fragranceid))
    .slice(1, 4);

  if (!fragrance) {
    return notFound();
  }

  return (
    <>
      <section className={styles.productContainer}>
        <div className={styles.productInfoContainer}>
          <div className={styles.productCarousel}>
            <ImageCarousel
              images={[
                `/perfumes/${fragrance.images.image1}`,
                `/perfumes/${fragrance.images.image2}`,
              ]}
            />
          </div>
          <div className={styles.productDetails}>
            <h3>{fragrance.name}</h3>
            <p className={styles.description}>{fragrance.description}</p>
            <div>
              <p className={styles.notes}>Notes: {fragrance.details.notes}</p>
              <div className={styles.detail}>
                <p>{fragrance.details.fragrance}</p>
                <p>{fragrance.details.size}</p>
              </div>
            </div>
            <p className={styles.price}>$ {fragrance.details.price}</p>
            <div className={styles.productActions}>
              <CartAction initialCount={1} />
            </div>
          </div>
        </div>
        <div className={styles.productStoryContainer}>
          <div className={styles.productStory}>
            <h3 className={styles.productStoryHeader}>
              The Story behind {fragrance.name}.
            </h3>
            <p className={styles.story}>{fragrance.story}</p>
          </div>
          <div className={styles.storyImage}>
            <img
              src={`/perfumes/${fragrance.images.image3}`}
              alt={`An image of ${fragrance.name}`}
              className={styles.image}
            />
          </div>
        </div>
      </section>
      <section className={styles.recommendationContainer}>
        <h3 className={styles.recommendedHeader}>Other Fragrances</h3>
        <div className={styles.recommended}>
          {recommended.map((fragrance) => (
            <Product key={fragrance.id} fragrance={fragrance} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ViewFragrance;
