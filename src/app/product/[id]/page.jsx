"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { singleProduct } from "@/data";
import Price from "@/components/Price/Price";

function SingleProduct({ params }) {
  const [data, setData] = useState({
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "image/upload/v1703942252/wjbhv8ggegzxmzoaytuy.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additional_price: 0,
      },
      {
        title: "Medium",
        additional_price: 4,
      },
      {
        title: "Large",
        additional_price: 6,
      },
    ],
    category: "Pizza",
  });

  useEffect(() => {
    fetch(`https://restaurant-final-api.fly.dev/products/${params.id}/`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [params]);

  console.log(data);
  return (
    <div className={styles.container}>
      {data.img && (
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
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.desc}>{data.desc}</p>
        <Price price={data.price} id={data.id} options={data.options} />
      </div>
    </div>
  );
}

export default SingleProduct;
