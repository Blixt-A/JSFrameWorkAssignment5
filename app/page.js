
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div>
          <h1 className={inter.className}>This is my homepage</h1>
          <div>
            <Link href="/about">Go to About</Link>
          </div>
          <div>
            <Link href="/our_animals">Animals</Link>
          </div>
          <div>
            <Link href="/volunteer">Volunteer</Link>
          </div>
          <div>
            <Link href="/animals">Endangered Animals</Link>
          </div>
          <div>
            <Image src="/elephant.jpg" alt="Elephant" width={500} height={333} />
          </div>
        </div>
      </main>
    </div>
  );
}
