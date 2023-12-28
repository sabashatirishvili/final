import React from "react";
import styles from "./page.module.css";
import { menu } from "@/data";
import Link from "next/link";

function Menu() {
  return (
    <div className={styles.container}>
      {menu.map((category) => (
        <Link
          className={styles.category}
          key={category.id}
          href={`/menu/${category.slug}`}
          style={{
            backgroundImage: `url(${category.img})`,
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
