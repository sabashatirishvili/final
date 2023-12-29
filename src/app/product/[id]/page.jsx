import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { singleProduct } from "@/data";
import Price from "@/components/Price/Price";

function SingleProduct() {
  return (
    <div className={styles.container}>
      {singleProduct.img && (
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={singleProduct.img}
            alt="product image"
            fill
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{singleProduct.title}</h1>
        <p className={styles.desc}>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
}

export default SingleProduct;
