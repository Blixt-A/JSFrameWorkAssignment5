import Link from 'next/link';
import styles from '../components/navbar.module.css';
import { Inter } from 'next/font/google'


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link 
        href="/">Home
        </Link>
      </div>
      <ul className={styles.nav_links}>
        <li>
          <Link 
          href="/about">About
          </Link>
        </li>
        <li>
          <Link 
          href="/tiger">Tiger
          </Link>
        </li>
        <li>
          <Link 
          href="/rhino">Rhino
          </Link>
        </li>
        <li>
          <Link 
          href="/panda">Panda
          </Link>
        </li>
      </ul>
    </nav>
  );
}