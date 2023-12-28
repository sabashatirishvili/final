"use client";

import React, { useEffect, useState } from "react";
import styles from "./countdown.module.css";

function Countdown() {
  let now = new Date();
  let twoDaysFromNow = +now + 172800000;
  let difference = +twoDaysFromNow - +now;
  const [delay, setDelay] = useState(difference);
  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);
    if (delay === 0) {
      return () => {
        clearInterval(0);
      };
    }
    return () => {
      clearInterval(0);
    };
  }, [delay]);

  return (
    <span className={styles.container}>
      {d}:{h}:{m}:{s}
    </span>
  );
}

export default Countdown;
