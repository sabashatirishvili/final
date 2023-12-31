"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { singleProduct } from "@/data";
import Price from "@/components/Price/Price";

function SingleProduct({ params }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [params]);

  let options = data.options;

  return (
    <div className={styles.container}>
      {singleProduct.img && (
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={`https://res.cloudinary.com/dqzdpni3j/${data.img}`}
            alt="product image"
            fill
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{singleProduct.title}</h1>
        <p className={styles.desc}>{data.desc}</p>
        {/* <Price
          price={data.price}
          id={data.id}
          options={data.options}
        /> */}
      </div>
    </div>
  );
}

export default SingleProduct;
