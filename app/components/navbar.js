import Link from "next/link";
import styles from "../components/navbar.module.css";
import { Inter } from "next/font/google";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Home</Link>
      </div>
      <ul className={styles.nav_links}>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/our_animals">Our animals</Link>
        </li>
        <li>
          <Link href="/volunteer">Volunteer</Link>
        </li>
        <li>
          <Link href="/animals">Animals again</Link>
        </li>
      </ul>
    </nav>
  );
}


