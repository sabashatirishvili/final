"use client";

import React from "react";
import styles from "./modeSwitch.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function ModeSwitch() {
  const {toggle, mode} = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div
        className={styles.switcher}
        style={mode === "dark" ? { right: "3px" } : { left: "3px" }}
      ></div>
    </div>
  );
}

export default ModeSwitch;
