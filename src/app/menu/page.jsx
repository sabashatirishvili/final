"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { menu } from "@/data";
import Link from "next/link";

function Menu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/menus/")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <div className={styles.container}>
      {data.map((category, index) => (
        <Link
          className={styles.category}
          key={index}
          href={`/menu/${category.slug}`}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dqzdpni3j/${category.img})`,
          }}
        >
          <div
            className={styles.textContainer}
            style={{
              color: `${category.color}`,
            }}
          >
            <h1 className={styles.title}>{category.title}</h1>
            <p className={styles.desc}>{category.desc}</p>
            <button
              className={styles.btn}
              style={{
                backgroundColor: ` ${category.color}`,
                color: `${category.color === "black" ? "white" : "#ef4444"}`,
              }}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
