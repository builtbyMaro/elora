"use client";

import { useState } from "react";
import { useCart } from "@/utils/context/cartContext";
import styles from "./cartaction.module.css";

type Props = {
  productId: number;
  initialCount?: number;
};

const CartAction = ({ productId, initialCount = 1 }: Props) => {
  const [count, setCount] = useState(initialCount);
  const { addToCart } = useCart();

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(productId, count);
    setCount(initialCount);
  };

  return (
    <div className={styles.cartAction}>
      <div className={styles.counter}>
        <button onClick={decrement} className={styles.counterBtn}>
          -
        </button>
        <span className={styles.count}>{count}</span>{" "}
        <button onClick={increment} className={styles.counterBtn}>
          +
        </button>
      </div>
      <button onClick={handleAddToCart} className={styles.addBtn}>
        Add to Cart
      </button>
    </div>
  );
};

export default CartAction;
