import styles from "./page.module.css";

const PrivacyPolicy = () => {
  return (
    <>
      <section className={styles.sectionContainer}>
        <div className={styles.pContainer}>
          <p>
            Your privacy matters. This policy explains how ELORA collects, uses,
            and protects your personal information when you visit our website or
            make a purchase.
          </p>
          <p>
            By using our website, you agree to the practices described below.
          </p>
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Information we Collect</h3>
        <div className={styles.pContainer}>
          <p>We collect information you voluntarily provide, including:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Shipping and billing details</li>
            <li>Order information</li>
          </ul>
          <p>
            We may also collect limited technical data such as browser type or
            device information to improve site performance and security.
          </p>
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <h3>How Your Information is Used</h3>
        <div className={styles.pContainer}>
          <p>Your information is used to:</p>
          <ul>
            <li>Process and deliver orders</li>
            <li>Communicate order updates and support requests</li>
            <li>Improve our website and services</li>
            <li>Send optional updates if you subscribe to our mailing list</li>
          </ul>
          <p>We do not sell or trade your personal Information</p>
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Data Protection</h3>
        <div className={styles.pContainer}>
          <p>
            ELORA takes reasonable measures to protect your data from
            unauthorized access, loss, or misuse. Payment information is
            processed securely through trusted third-party providers and is
            never stored directly on our servers.
          </p>
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Cookies</h3>
        <div className={styles.pContainer}>
          <p>
            Our website uses cookies to ensure basic functionality and improve
            your browsing experience. You can manage or disable cookies through
            your browser settings.
          </p>
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Third-Party Services</h3>
        <div className={styles.pContainer}>
          <p>
            We may use third-party services (such as payment processors or
            analytics tools) that require limited access to certain data to
            function properly. These providers are obligated to handle your
            information responsibly.
          </p>
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Your Rights</h3>
        <div className={styles.pContainer}>
          <p>
            You may request to access, update, or delete your personal
            information at any time by contacting us.
          </p>
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <h3>Contact</h3>
        <div className={styles.pContainer}>
          <p>
            If you have questions about this policy or how your data is handled,
            contact us at privacy@elora.com.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
