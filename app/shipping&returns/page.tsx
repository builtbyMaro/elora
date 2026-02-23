import styles from "./page.module.css";

const Shipping = () => {
  return (
    <>
      <section className={styles.sectionContainer}>
        <h3>Shipping Information</h3>
        <div className={styles.pContainer}>
          <p>
            Orders are processed within 1–3 business days after confirmation.
            Once shipped, you will receive an email with tracking details so you
            can follow your delivery.
          </p>
          <p>
            Delivery times vary depending on location and shipping method
            selected at checkout. While we aim to deliver within the estimated
            timeframe, external factors such as customs processing or courier
            delays may affect delivery.
          </p>
          <p>
            Shipping fees are calculated at checkout based on your location and
            order size.
          </p>
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <h3>International Shipping</h3>
        <div className={styles.pContainer}>
          <p>
            ELORA ships to selected international destinations. Customers are
            responsible for any customs duties, taxes, or import fees required
            by their country. These charges are not included in the product
            price or shipping cost.
          </p>
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Return & Exchanges</h3>
        <div className={styles.pContainer}>
          <p>
            We accept returns within 14 days of delivery, provided the item is
            unused, unopened, and in its original packaging.{" "}
          </p>
          <p>
            Due to the nature of fragrances, opened or used products cannot be
            returned for hygiene and safety reasons.
          </p>
          <p>
            If your order arrives damaged or incorrect, please contact us within
            48 hours of delivery with clear photos of the issue. We will arrange
            a replacement or refund where appropriate.
          </p>
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <h4>How to Request a Return</h4>
        <div className={styles.pContainer}>
          <p>
            To start a return, email us at support@elora.com with your order
            number and reason for return. Once approved, return instructions
            will be provided.
          </p>
          <p>
            Refunds are issued to the original payment method after the returned
            item has been inspected.
          </p>
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Contact</h3>
        <div className={styles.pContainer}>
          <p>
            For any other shipping or return questions, reach out to
            support@elora.com. We’re here to help.
          </p>
        </div>
      </section>
    </>
  );
};

export default Shipping;
