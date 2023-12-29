import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.imgContainer}>
          <Image src="/loginBg.png" alt="login_bg" fill className={styles.loginBg} />
        </div>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Welcome</h1>
          <p className={styles.desc}>
            Log into your account or create a new one using social buttons
          </p>
          <button className={styles.btn}>
            <Image
              src="/google.png"
              alt="google"
              width={20}
              height={20}
              className={styles.googleLogo}
            />
            <span>Sign in with Google</span>
          </button>
          <button className={styles.btn}>
            <Image
              src="/facebook.png"
              alt="facebook"
              width={20}
              height={20}
              className={styles.googleLogo}
            />
            <span>Sign in with Facebook</span>
          </button>
          <p>
            Have a problem?{" "}
            <Link className={styles.contact} href="">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
