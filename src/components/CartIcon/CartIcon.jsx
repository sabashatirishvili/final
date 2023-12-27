"use client";
import React from "react";
import styles from "./cartIcon.module.css";
import Image from "next/image";
import Link from "next/link";

function CartIcon() {
  return (
    <Link className={styles.container} href="/cart">
      <div className={styles.imgContainer}>
        <Image src="/cart.png" alt="cart" fill={true}></Image>
      </div>
      <span>Cart (3)</span>
    </Link>
  );
}

export default CartIcon;
