"use client";
import React from "react";
import styles from "./menu.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import CartIcon from "../CartIcon/CartIcon";
function Menu() {
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      title: "Homepage",
      url: "/",
    },
    {
      id: 2,
      title: "Menu",
      url: "/menu",
    },
    {
      id: 3,
      title: "Working Hours",
      url: "/",
    },
    {
      id: 4,
      title: "Contact",
      url: "/",
    },
  ];
  return (
    <div className={styles.container}>
      {!open ? (
        <Image
          src="/open.png"
          alt="open"
          width={20}
          height={20}
          onClick={() => {
            setOpen(true);
          }}
        />
      ) : (
        <Image
          src="/close.png"
          alt="open"
          width={20}
          height={20}
          onClick={() => {
            setOpen(false);
          }}
        />
      )}
      {open && (
        <div className={styles.items}>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => {
                setOpen(false);
              }}
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => {
              setOpen(false);
            }}
          >
            Login
          </Link>
          <CartIcon
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Menu;
