"use client";

import { useState } from "react";
import styles from "./cartaction.module.css";

type Props = {
  initialCount?: number;
};

const CartAction = ({ initialCount = 1 }: Props) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    console.log(`Added ${count} item(s) to cart`);
  };

  return (
    <div className={styles.cartAction}>
      <div className={styles.counter}>
        <button onClick={decrement} className={styles.counterBtn}>
          -
        </button>
        <span className={styles.count}>{count}</span>
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
