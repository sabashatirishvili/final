import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { featuredProducts } from "@/data";
function Featured() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {featuredProducts.map((product) => (
          <div key={product.id} className={styles.singleItem}>
            {product.img && (
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  src={product.img}
                  alt="product"
                  fill
                />
              </div>
            )}
            <div className={styles.textContainer}>
              <h1 className={styles.title}>{product.title}</h1>
              <p className={styles.desc}>{product.desc}</p>
              <span className={styles.price}>${product.price}</span>
              <button className={styles.btn}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
