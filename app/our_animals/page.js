import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../page.module.css";

import Link from "next/link";

export default function Animals() {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Endangered Animals</h1>
        <Image src="/panda.jpg" alt="Panda" width={500} height={333} />
        <p>
          One the main reasons that panda populations have declined is habitat
          destruction. As the human population in China continues to grow,
          the pandas habitat gets taken over by development, pushing them into
          smaller and less livable areas. Habitat destruction also leads to food
          shortages. Pandas feed on several varieties of bamboo that bloom at
          different times of the year. If one type of bamboo is destroyed by
          development, it can leave the pandas with nothing to eat during the
          time it normally blooms, increasing the risk of starvation.
        </p>
      </div>
      <div className={styles.animalConatiner}>
        <div className={styles.link}>
          <div>
          </div><Link href="/our_animals/Tigers">Tigers
            <Image src="/tiger.jpg" alt="Tiger" width={500} height={333}/>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="/our_animals/Rhinos">Rhinos
            <Image src="/indian-rhino.jpg" alt="Rhino" width={500} height={333}/>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="/our_animals/Elephants">Elephants
            <Image src="/elephant.jpg" alt="Elephant" width={500} height={333}/>
          </Link>
        </div>
      </div>
    </div>
      
  );
}
