import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.singleItem}>
          <Image
            src="/temporary/p1.png"
            alt="product"
            width={100}
            height={100}
            className={styles.img}
          />
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Sicilian</h1>
            <span className={styles.type}>Large</span>
          </div>
          <h2 className={styles.price}>$79.79</h2>
          <span className={styles.close}>X</span>
        </div>
        <div className={styles.singleItem}>
          <Image
            src="/temporary/p1.png"
            alt="product"
            width={100}
            height={100}
            className={styles.img}
          />
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Sicilian</h1>
            <span className={styles.type}>Large</span>
          </div>
          <h2 className={styles.price}>$79.79</h2>
          <span className={styles.close}>X</span>
        </div>
        <div className={styles.singleItem}>
          <Image
            src="/temporary/p1.png"
            alt="product"
            width={100}
            height={100}
            className={styles.img}
          />
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Sicilian</h1>
            <span className={styles.type}>Large</span>
          </div>
          <h2 className={styles.price}>$79.79</h2>
          <span className={styles.close}>X</span>
        </div>
      </div>
      <div className={styles.paymentContainer}>
        <div className={styles.subtotal}>
          <span>Subtotal (3 items)</span>
          <span>$81.70</span>
        </div>
        <div className={styles.services}>
          <span>Service Cost</span>
          <span>0.00$</span>
        </div>
        <div className={styles.delivery}>
          <span>Delivery Cost</span>
          <span className={styles.deliveryPrice}>FREE!</span>
        </div>
        <div className={styles.total}>
          <h2>TOTAL (INCL. VAT)</h2>
          <h2 className={styles.totalCost}>$81.70</h2>
        </div>
        <button className={styles.btn}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
