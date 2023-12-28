import React from "react";
import styles from "./offer.module.css";
import Image from "next/image";
import Countdown from "../Countdown/Countdown";

function Offer() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Delicious Burger & French Fry</h1>
        <p className={styles.desc}>
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <Countdown/>
        <button className={styles.btn}>Order Now</button>
      </div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/offerProduct.png"
          alt="offer-product"
          fill
        />
      </div>
    </div>
  );
}

export default Offer;
