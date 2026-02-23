import styles from "./page.module.css";
import Link from "next/link";

const Terms = () => {
  return (
    <>
      <section className={styles.sectionContainer}>
        <p>
          Welcome to ELORA. These Terms & Conditions govern your use of our
          website and services. By accessing or purchasing from our site, you
          agree to the terms outlined below.
        </p>
        <p>
          If you do not agree with any part of these terms, please refrain from
          using our website.
        </p>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Use of Website</h3>
        <p>
          You agree to use this website for lawful purposes only. Any misuse,
          including attempts to disrupt site functionality or access restricted
          areas, is prohibited.
        </p>
        <p>
          All content on this website — including text, images, and design
          elements — is owned by ELORA and may not be copied, reproduced, or
          used without permission.
        </p>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Production Information</h3>
        <p>
          We aim to present all products as accurately as possible. However,
          slight variations in color or appearance may occur due to screen
          settings or lighting.
        </p>
        <p>
          Fragrance descriptions are provided for guidance and interpretation
          and may vary based on individual perception.
        </p>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Orders & Payments</h3>
        <p>
          All orders are subject to availability and confirmation. Prices are
          listed in the selected currency and may change without prior notice.
        </p>
        <p>
          Payment must be completed at checkout using the available payment
          methods. Orders are not considered confirmed until payment has been
          successfully processed.
        </p>
        <p>
          We reserve the right to refuse or cancel any order if necessary,
          including in cases of suspected fraud or pricing errors.
        </p>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Shipping & Returns</h3>
        <p>
          Shipping and return policies are outlined separately on our{" "}
          <Link href="/shipping&returns">Shipping & Returns</Link> page. By
          placing an order, you agree to those terms.
        </p>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Intellectual Property</h3>
        <p>
          All materials on this website, including logos, visuals, text, and
          product names, are protected by intellectual property laws.
          Unauthorized use is not permitted.
        </p>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Limitation of Liability</h3>
        <p>
          ELORA is not responsible for indirect or consequential damages arising
          from the use of our products or website.
        </p>
        <p>
          Our liability is limited to the purchase price of the product in
          question, where permitted by law.
        </p>
      </section>
      <section className={styles.sectionContainer}>
        <h3>External Links</h3>
        <p>
          This website may contain links to third-party sites for convenience.
          ELORA does not control or endorse these websites and is not
          responsible for their content or policies.
        </p>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Changes to These Terms</h3>
        <p>
          These Terms & Conditions may be updated periodically. Continued use of
          the website after changes are made constitutes acceptance of the
          revised terms.
        </p>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Governing Law</h3>
        <p>
          These terms are governed by applicable laws based on our operating
          jurisdiction.
        </p>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Contact</h3>
        <p>
          For questions regarding these Terms & Conditions, contact us at
          legal@elora.com.
        </p>
      </section>
    </>
  );
};

export default Terms;
