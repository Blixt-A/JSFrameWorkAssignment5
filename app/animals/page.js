import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../page.module.css";

import Link from "next/link";

export default function Animals() {
  return (
    <div>
      <Navbar />
      <div className={styles.link}>
        <Link href="/animals/tiger">Blahhaaaa här ska vi lägga till flera animals!</Link>
      </div>
      <Image src="/tiger.jpg" alt="Tiger" width={500} height={333} />
    </div>
  );
}
