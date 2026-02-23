"use client";
import styles from "./navbar.module.css";
import { useCart } from "@/utils/context/cartContext";
import CartItem from "../Cart Item/cartItem";
import { getFragrances } from "@/utils/lib/perfumes";

type Props = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ showCart, setShowCart }: Props) => {
  const { cart, clearCart, totalItems } = useCart();
  const fragrances = getFragrances();

  const totalPrice = cart.reduce((total, cartItem) => {
    const fragrance = fragrances.find((f) => f.id === cartItem.id);

    if (!fragrance) return total;

    const price = Number(fragrance.details.price);

    return total + price * cartItem.quantity;
  }, 0);

  return (
    <div
      className={`${styles.overlay} ${showCart ? styles.showOverlay : ""}`}
      onClick={() => setShowCart(false)}
    >
      <div
        className={`${styles.cartContainer} ${showCart ? styles.showCart : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <i
          className={`${styles.closeCart} bx bx-x`}
          onClick={() => setShowCart(false)}
        ></i>
        <div className={styles.cartHeader}>
          <h2>Cart ({totalItems})</h2>
          <button onClick={clearCart}>Empty Cart</button>
        </div>

        {cart.length === 0 && <p className={styles.emptyCart}>Cart is empty</p>}

        {cart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            quantity={item.quantity}
            setShowCart={setShowCart}
          />
        ))}
        {cart.length > 0 && (
          <div className={styles.total}>
            <h4>Total:</h4>
            <p>${totalPrice}</p>
          </div>
        )}
        {cart.length > 0 ? (
          <button className={styles.checkoutBtn}>Checkout</button>
        ) : (
          <button
            className={styles.checkoutBtn}
            onClick={() => setShowCart(false)}
          >
            Continue Shopping
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
