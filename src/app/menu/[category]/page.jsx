import React from "react";
import styles from "./page.module.css";
import { pizzas } from "@/data";
import Link from "next/link";
import Image from "next/image";

function CategoryPage() {
  console.log(pizzas);
  return (
    <div className={styles.container}>
      {pizzas.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className={styles.singleItem}
        >
          {true && (
            <div className={styles.imgContainer}>
              <Image src="" alt="" fill />
            </div>
          )}
          <div className={styles.textContainer}>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryPage;
