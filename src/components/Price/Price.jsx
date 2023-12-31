"use client";

import React, { useEffect, useState } from "react";
import styles from "./price.module.css";

function Price({ price, id, options }) {
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    setTotalPrice(
      quantity *
        (options && options[selected]
          ? price + options[selected]["additional_price"]
          : price)
    );
  }, [quantity, selected, options, price]);

  console.log(options);
  return (
    <div className={styles.container}>
      <h2 className={styles.price}>${totalPrice.toFixed(2)}</h2>
      <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <button
            className={styles.singleOption}
            key={option.title}
            style={{
              background: selected === index ? "#ef4444" : "#fff",
              color: selected === index ? "#fff" : "#ef4444",
            }}
            onClick={() => {
              setSelected(index);
            }}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className={styles.quantityContainer}>
        <div className={styles.quantity}>
          <span>Quantity</span>
          <div className={styles.buttons}>
            <button
              className={styles.btn}
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              className={styles.btn}
              onClick={() => setQuantity((prev) => (prev > 0 ? prev + 1 : 1))}
            >
              {">"}
            </button>
          </div>
        </div>
        <button className={styles.cartButton}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Price;
