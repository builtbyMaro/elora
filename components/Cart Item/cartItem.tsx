"use client";
import styles from "./cartitem.module.css";
import Link from "next/link";
import { getFragrances } from "@/utils/lib/perfumes";
import { useCart } from "@/utils/context/cartContext";

type Props = {
  id: number;
  quantity: number;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CartItem({ id, quantity, setShowCart }: Props) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();
  const fragrances = getFragrances();

  const fragrance = fragrances.find((f) => f.id === id);

  if (!fragrance) return null;

  return (
    <div className={styles.itemContainer}>
      <Link
        href={`/fragrances/${fragrance.id}`}
        className={styles.itemDetails}
        onClick={() => setShowCart(false)}
      >
        <img
          src={`/Perfumes/${fragrance.images.image1}`}
          alt={fragrance.name}
          width={60}
          height={60}
        />
        <div className={styles.itemText}>
          <p>{fragrance.name}</p>
          <p>${fragrance.details.price}</p>
        </div>
      </Link>
      <div className={styles.itemActions}>
        <div className={styles.counter}>
          <button
            onClick={() => decreaseQty(fragrance.id)}
            className={styles.counterBtn}
          >
            -
          </button>
          <span className={styles.count}>{quantity}</span>
          <button
            onClick={() => increaseQty(fragrance.id)}
            className={styles.counterBtn}
          >
            +
          </button>
        </div>
        <i
          className={`bx bx-x ${styles.removeIcon}`}
          onClick={() => removeFromCart(fragrance.id)}
        />
      </div>
    </div>
  );
}
