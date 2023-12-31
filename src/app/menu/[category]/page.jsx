"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { pizzas } from "@/data";
import Link from "next/link";
import Image from "next/image";

function CategoryPage() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://restaurant-final-api.fly.dev/products/")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className={styles.singleItem}
        >
          {true && (
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={`https://res.cloudinary.com/dqzdpni3j/${item.img}`}
                alt="product_image"
                fill
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{item.title}</h1>
            <h2 className={styles.price}>${item.price}</h2>
            <button
              className={styles.btn}
            >
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryPage;
