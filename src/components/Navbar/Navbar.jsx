import styles from "./navbar.module.css";
import Link from "next/link";
import Menu from "../Menu/Menu";
import CartIcon from "../CartIcon/CartIcon";
import Image from "next/image";

function Navbar() {
  
  return (
    <div className={styles.container}>
      <div className={styles.linksLeft}>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className={styles.logo}>
        <Link href="/">Massimo</Link>
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.linksRight}>
        <div className={styles.phoneNumber}>
          <Image src="/phone.png" alt="phone" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        <Link href="/login">Login</Link>
        <Link href="/orders">Orders</Link>
        <CartIcon/>
      </div>

    </div>
  );
}

export default Navbar;
