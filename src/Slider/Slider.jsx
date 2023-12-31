"use client";
import React, { useEffect, useState } from "react";
import styles from "./slider.module.css";
import Image from "next/image";
const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
      if (currentSlide.id === 2) {
        setCurrentSlide(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{data[currentSlide].title}</h1>
        <button className={styles.btn}>Order Now</button>
      </div>
      <div className={styles.imgContainer}>
        <Image src={data[currentSlide].image} alt="slide-image" fill />
      </div>
    </div>
  );
}

export default Slider;
